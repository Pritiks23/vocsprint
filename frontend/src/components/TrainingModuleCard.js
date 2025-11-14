import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Collapse,
  List,
  ListItem,
  ListItemText,
  LinearProgress,
  Box,
  Checkbox
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function TrainingModuleCard({ title, description, lessons, moduleId }) {
  const [open, setOpen] = useState(false);
  const [completed, setCompleted] = useState([]);
  const navigate = useNavigate();

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleLessonClick = (lessonIndex) => {
    navigate(`/lesson/${moduleId}/${lessonIndex}`);
  };

  const progress = (completed.length / lessons.length) * 100;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" gutterBottom color="primary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="caption" color="text.secondary">
            Progress: {completed.length} / {lessons.length} lessons
          </Typography>
          <LinearProgress variant="determinate" value={progress} sx={{ mt: 1 }} />
        </Box>

        <Button
          variant="contained"
          fullWidth
          onClick={handleToggle}
          endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        >
          {open ? 'Hide Lessons' : 'View Lessons'}
        </Button>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List sx={{ mt: 2 }}>
            {lessons.map((lesson, index) => {
              const isCompleted = completed.includes(index);
              return (
                <ListItem
                  key={index}
                  button
                  onClick={() => handleLessonClick(index)}
                  sx={{
                    backgroundColor: isCompleted ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
                    borderRadius: 1,
                    mb: 1,
                    '&:hover': {
                      backgroundColor: 'rgba(139, 92, 246, 0.2)',
                    }
                  }}
                >
                  <Checkbox
                    edge="start"
                    checked={isCompleted}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText
                    primary={lesson.title}
                    secondary={lesson.content}
                    primaryTypographyProps={{
                      fontWeight: isCompleted ? 'bold' : 'normal'
                    }}
                  />
                </ListItem>
              );
            })}
          </List>
        </Collapse>
      </CardContent>
    </Card>
  );
}
