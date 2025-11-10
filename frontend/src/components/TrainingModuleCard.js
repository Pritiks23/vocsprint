import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Collapse, List, ListItem, ListItemText, LinearProgress } from '@mui/material';

const electricianLessons = [
  { title: 'Intro to Electrical Safety', content: 'Learn about PPE, lockout/tagout, and safe work practices.' },
  { title: 'Basic Wiring', content: 'Understand wiring diagrams, color codes, and hands-on wire connections.' },
  { title: 'Circuits & Breakers', content: 'Explore circuit types, breaker panels, and troubleshooting.' }
];

export default function TrainingModuleCard({ title, description, lessons }) {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(Array(lessons.length).fill(false));

  const handleLessonClick = (idx) => {
    const newCompleted = [...completed];
    newCompleted[idx] = !newCompleted[idx];
    setCompleted(newCompleted);
    setProgress((newCompleted.filter(Boolean).length / lessons.length) * 100);
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
              <ListItem key={lesson.title} button onClick={() => handleLessonClick(idx)} selected={completed[idx]}>
                <ListItemText
                  primary={lesson.title}
                  secondary={completed[idx] ? lesson.content : ''}
                  primaryTypographyProps={{ color: completed[idx] ? 'primary' : 'text.primary' }}
                />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </CardContent>
    </Card>
  );
}
