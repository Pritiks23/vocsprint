import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Collapse, List, ListItem, ListItemText, LinearProgress, Checkbox } from '@mui/material';
import LessonDialog from './LessonDialog';

export default function TrainingModuleCard({ title, description, lessons }) {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(Array(lessons.length).fill(false));
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleLessonClick = (idx) => {
    setSelectedLesson({ ...lessons[idx], index: idx });
    setDialogOpen(true);
  };

  const handleLessonComplete = () => {
    if (selectedLesson) {
      const newCompleted = [...completed];
      newCompleted[selectedLesson.index] = true;
      setCompleted(newCompleted);
      setProgress((newCompleted.filter(Boolean).length / lessons.length) * 100);
    }
  };

  return (
    <Card sx={{ bgcolor: 'background.paper', color: 'text.primary', minHeight: 200 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>{title}</Typography>
        <Typography variant="body1" paragraph>{description}</Typography>
        <Button variant="contained" color="primary" onClick={() => setOpen(!open)}>
          {open ? 'Hide Lessons' : 'Show Lessons'}
        </Button>
        <Collapse in={open} sx={{ mt: 2 }}>
          <LinearProgress variant="determinate" value={progress} sx={{ mb: 2 }} />
          <List>
            {lessons.map((lesson, idx) => (
              <ListItem 
                key={lesson.title} 
                button 
                onClick={() => handleLessonClick(idx)}
                sx={{ 
                  bgcolor: completed[idx] ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
                  borderRadius: 1,
                  mb: 0.5
                }}
              >
                <Checkbox 
                  checked={completed[idx]} 
                  color="primary" 
                  sx={{ mr: 1 }}
                  onClick={(e) => e.stopPropagation()}
                />
                <ListItemText
                  primary={lesson.title}
                  primaryTypographyProps={{ 
                    color: completed[idx] ? 'primary' : 'text.primary',
                    fontWeight: completed[idx] ? 'bold' : 'normal'
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </CardContent>
      <LessonDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        lesson={selectedLesson}
        onComplete={handleLessonComplete}
        isCompleted={selectedLesson ? completed[selectedLesson.index] : false}
      />
    </Card>
  );
}
