import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Checkbox,
  FormControlLabel,
  LinearProgress,
  Divider,
  Chip
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { trainings } from './Home';

export default function LessonPage() {
  const { moduleId, lessonId } = useParams();
  const navigate = useNavigate();
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Get lesson data (you'll need to pass this through route or context)
  const lesson = getLessonData(moduleId, lessonId);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      if (scrollTop + windowHeight >= documentHeight - 50) {
        setHasScrolledToBottom(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleComplete = () => {
    setIsCompleted(true);
    // Save completion status to localStorage or backend
    localStorage.setItem(`lesson_${moduleId}_${lessonId}`, 'completed');
    setTimeout(() => navigate('/'), 2000);
  };

  const parseContent = (content) => {
    const sections = [];
    const lines = content.split('\n');
    let currentSection = { type: 'paragraph', content: [] };

    lines.forEach((line) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        // Main heading
        if (currentSection.content.length > 0) {
          sections.push(currentSection);
        }
        sections.push({
          type: 'heading',
          content: line.replace(/\*\*/g, ''),
          level: 1
        });
        currentSection = { type: 'paragraph', content: [] };
      } else if (line.startsWith('**') && !line.endsWith('**')) {
        // Subheading
        if (currentSection.content.length > 0) {
          sections.push(currentSection);
        }
        sections.push({
          type: 'heading',
          content: line.replace(/\*\*/g, ''),
          level: 2
        });
        currentSection = { type: 'paragraph', content: [] };
      } else if (line.startsWith('- ')) {
        // List item
        if (currentSection.type !== 'list') {
          if (currentSection.content.length > 0) {
            sections.push(currentSection);
          }
          currentSection = { type: 'list', content: [] };
        }
        currentSection.content.push(line.substring(2));
      } else if (line.trim() === '') {
        // Empty line - end current section
        if (currentSection.content.length > 0) {
          sections.push(currentSection);
          currentSection = { type: 'paragraph', content: [] };
        }
      } else if (line.match(/^\d+\./)) {
        // Numbered list
        if (currentSection.type !== 'numberedList') {
          if (currentSection.content.length > 0) {
            sections.push(currentSection);
          }
          currentSection = { type: 'numberedList', content: [] };
        }
        currentSection.content.push(line);
      } else {
        // Regular paragraph text
        if (currentSection.type !== 'paragraph') {
          if (currentSection.content.length > 0) {
            sections.push(currentSection);
          }
          currentSection = { type: 'paragraph', content: [] };
        }
        currentSection.content.push(line);
      }
    });

    if (currentSection.content.length > 0) {
      sections.push(currentSection);
    }

    return sections;
  };

  const renderSection = (section, index) => {
    switch (section.type) {
      case 'heading':
        return (
          <Box key={index} sx={{ mt: section.level === 1 ? 4 : 3, mb: 2 }}>
            <Typography
              variant={section.level === 1 ? 'h4' : 'h5'}
              sx={{
                fontWeight: 'bold',
                color: 'primary.main',
                borderBottom: section.level === 1 ? '2px solid' : 'none',
                borderColor: 'primary.main',
                pb: 1
              }}
            >
              {section.content}
            </Typography>
          </Box>
        );
      case 'list':
        return (
          <Box key={index} component="ul" sx={{ mt: 2, mb: 2, pl: 4 }}>
            {section.content.map((item, i) => (
              <li key={i}>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  {item}
                </Typography>
              </li>
            ))}
          </Box>
        );
      case 'numberedList':
        return (
          <Box key={index} component="ol" sx={{ mt: 2, mb: 2, pl: 4 }}>
            {section.content.map((item, i) => (
              <li key={i}>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  {item.replace(/^\d+\.\s*/, '')}
                </Typography>
              </li>
            ))}
          </Box>
        );
      case 'paragraph':
        return (
          <Typography key={index} variant="body1" sx={{ mt: 2, mb: 2, lineHeight: 1.8 }}>
            {section.content.join(' ')}
          </Typography>
        );
      default:
        return null;
    }
  };

  if (!lesson) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography>Lesson not found</Typography>
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </Container>
    );
  }

  const sections = parseContent(lesson.fullContent || lesson.content);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/')}
        sx={{ mb: 3 }}
        variant="outlined"
      >
        Back to Modules
      </Button>

      <Paper elevation={3} sx={{ p: 4, backgroundColor: 'background.paper' }}>
        {/* Lesson Header */}
        <Box sx={{ mb: 4 }}>
          <Chip
            label={getModuleName(moduleId)}
            color="primary"
            sx={{ mb: 2 }}
          />
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            {lesson.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ fontStyle: 'italic' }}>
            {lesson.content}
          </Typography>
          <Divider sx={{ mt: 3, mb: 3 }} />
        </Box>

        {/* Lesson Content */}
        <Box sx={{ mb: 6 }}>
          {sections.map((section, index) => renderSection(section, index))}
        </Box>

        {/* Progress Indicator */}
        {!hasScrolledToBottom && (
          <Box sx={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
            <Paper elevation={6} sx={{ p: 2, backgroundColor: 'primary.main' }}>
              <Typography variant="body2" color="white">
                Scroll to bottom to complete
              </Typography>
            </Paper>
          </Box>
        )}

        {/* Completion Section */}
        <Box
          sx={{
            mt: 4,
            p: 3,
            backgroundColor: hasScrolledToBottom ? 'rgba(139, 92, 246, 0.1)' : 'rgba(0,0,0,0.05)',
            borderRadius: 2,
            border: hasScrolledToBottom ? '2px solid' : '1px solid',
            borderColor: hasScrolledToBottom ? 'primary.main' : 'divider'
          }}
        >
          {isCompleted ? (
            <Box sx={{ textAlign: 'center' }}>
              <CheckCircleIcon sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
              <Typography variant="h5" color="success.main" gutterBottom>
                Lesson Completed!
              </Typography>
              <Typography variant="body1">Redirecting to home...</Typography>
            </Box>
          ) : (
            <>
              <Typography variant="h6" gutterBottom>
                Complete This Lesson
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    disabled={!hasScrolledToBottom}
                  />
                }
                label="I have read and understood this lesson"
              />
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  onClick={handleComplete}
                  disabled={!hasScrolledToBottom || !isChecked}
                  startIcon={<CheckCircleIcon />}
                >
                  Mark as Complete
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Paper>
    </Container>
  );
}

// Helper function to get lesson data
function getLessonData(moduleId, lessonId) {
  const module = trainings[parseInt(moduleId)];
  if (!module) return null;
  return module.lessons[parseInt(lessonId)];
}

// Helper function to get module name
function getModuleName(moduleId) {
  const module = trainings[parseInt(moduleId)];
  return module ? module.title : 'Training Module';
}
