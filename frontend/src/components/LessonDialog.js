import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Checkbox, FormControlGroup, FormControlLabel, Box, LinearProgress } from '@mui/material';

export default function LessonDialog({ open, onClose, lesson, onComplete, isCompleted }) {
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const [checked, setChecked] = useState(isCompleted);
  const contentRef = useRef(null);

  useEffect(() => {
    setChecked(isCompleted);
    setHasScrolledToBottom(isCompleted);
  }, [isCompleted, open]);

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 10;
    if (bottom) {
      setHasScrolledToBottom(true);
    }
  };

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };

  const handleComplete = () => {
    if (checked) {
      onComplete();
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{lesson?.title}</DialogTitle>
      <DialogContent dividers ref={contentRef} onScroll={handleScroll} sx={{ maxHeight: '60vh' }}>
        <Typography variant="body1" paragraph>
          {lesson?.fullContent || lesson?.content}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ flexDirection: 'column', alignItems: 'stretch', p: 2 }}>
        {!hasScrolledToBottom && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="caption" color="text.secondary" align="center" display="block">
              Scroll to the bottom to complete this lesson
            </Typography>
            <LinearProgress variant="indeterminate" sx={{ mt: 1 }} />
          </Box>
        )}
        {hasScrolledToBottom && (
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleCheckboxChange} color="primary" />}
            label="Mark this lesson as complete"
            sx={{ mb: 1 }}
          />
        )}
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
          <Button onClick={onClose}>Close</Button>
          <Button 
            onClick={handleComplete} 
            variant="contained" 
            disabled={!hasScrolledToBottom || !checked}
          >
            Complete
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}
