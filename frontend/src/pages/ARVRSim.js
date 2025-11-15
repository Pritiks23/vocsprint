import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  LinearProgress,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  IconButton
} from '@mui/material';
import {
  PlayArrow,
  CheckCircle,
  Stars,
  ElectricalServices,
  AcUnit,
  Whatshot,
  Psychology,
  Close,
  Timer,
  EmojiEvents,
  TrendingUp,
  ViewInAr
} from '@mui/icons-material';

const ARVRSim = () => {
  const navigate = useNavigate();
  const [selectedSim, setSelectedSim] = useState(null);
  const [simActive, setSimActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [score, setScore] = useState(0);
  const [completedSims, setCompletedSims] = useState([]);
  const canvasRef = useRef(null);

  // Load completed sims from localStorage
  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem('completedSims') || '[]');
    setCompletedSims(completed);
  }, []);

  const simulations = [
    {
      id: 'electrical-house',
      title: 'Virtual House Wiring',
      trade: 'Electrician',
      icon: <ElectricalServices />,
      difficulty: 'Beginner',
      duration: '15 min',
      description: 'Wire a complete residential room with outlets, switches, and lighting circuits. Practice NEC code compliance in a safe virtual environment.',
      skills: ['Circuit Planning', 'Wire Routing', 'Box Installation', 'Code Compliance'],
      objectives: [
        'Install junction boxes at correct heights',
        'Run 14/2 Romex for lighting circuits',
        'Wire 3-way switch configuration',
        'Install GFCI outlet in correct location',
        'Test circuits for proper operation'
      ],
      color: '#ffd700'
    },
    {
      id: 'electrical-panel',
      title: 'Load Center Installation',
      trade: 'Electrician',
      icon: <ElectricalServices />,
      difficulty: 'Advanced',
      duration: '25 min',
      description: 'Install and wire a 200A residential load center. Calculate loads, install breakers, and balance circuits across phases.',
      skills: ['Load Calculation', 'Breaker Installation', 'Circuit Balancing', 'Grounding'],
      objectives: [
        'Mount panel securely at correct height',
        'Install main breaker properly',
        'Calculate and balance circuit loads',
        'Wire ground and neutral bars correctly',
        'Label all circuits clearly'
      ],
      color: '#ffd700'
    },
    {
      id: 'hvac-install',
      title: 'AC Unit Installation',
      trade: 'HVAC',
      icon: <AcUnit />,
      difficulty: 'Intermediate',
      duration: '20 min',
      description: 'Install a complete split-system AC unit including outdoor condenser, indoor air handler, refrigerant lines, and electrical connections.',
      skills: ['Equipment Mounting', 'Refrigerant Lines', 'Electrical Hookup', 'System Testing'],
      objectives: [
        'Mount outdoor unit level on pad',
        'Install air handler with proper clearances',
        'Run and insulate refrigerant lines',
        'Make electrical connections safely',
        'Vacuum and charge system correctly'
      ],
      color: '#00bcd4'
    },
    {
      id: 'hvac-troubleshoot',
      title: 'System Diagnostics Lab',
      trade: 'HVAC',
      icon: <AcUnit />,
      difficulty: 'Advanced',
      duration: '30 min',
      description: 'Diagnose and repair common HVAC problems. Use virtual gauges, multimeter, and diagnostic tools to identify issues.',
      skills: ['Problem Diagnosis', 'Gauge Reading', 'Electrical Testing', 'Repair Procedures'],
      objectives: [
        'Test system pressures with manifold gauges',
        'Check electrical components with multimeter',
        'Identify refrigerant leak location',
        'Determine root cause of failure',
        'Complete proper repair procedure'
      ],
      color: '#00bcd4'
    },
    {
      id: 'welding-mig',
      title: 'MIG Welding Simulator',
      trade: 'Welder',
      icon: <Whatshot />,
      difficulty: 'Beginner',
      duration: '20 min',
      description: 'Practice MIG welding technique in multiple positions. Get real-time feedback on travel speed, angle, and bead quality.',
      skills: ['Gun Angle', 'Travel Speed', 'Arc Length', 'Bead Appearance'],
      objectives: [
        'Maintain proper work angle (90°)',
        'Hold correct travel angle (5-15°)',
        'Control travel speed for uniform bead',
        'Achieve proper penetration',
        'Produce smooth, consistent welds'
      ],
      color: '#ff6b6b'
    },
    {
      id: 'welding-positions',
      title: 'Multi-Position Welding',
      trade: 'Welder',
      icon: <Whatshot />,
      difficulty: 'Advanced',
      duration: '30 min',
      description: 'Master welding in all positions: flat, horizontal, vertical, and overhead. Practice techniques specific to each position.',
      skills: ['Position Adaptation', 'Gravity Control', 'Heat Management', 'Quality Control'],
      objectives: [
        'Complete flat position weld (1G)',
        'Execute horizontal weld (2G)',
        'Perform vertical up weld (3G)',
        'Master overhead position (4G)',
        'Pass visual inspection for all positions'
      ],
      color: '#ff6b6b'
    },
    {
      id: 'smart-home',
      title: 'Smart Home Integration',
      trade: 'Electrician',
      icon: <Psychology />,
      difficulty: 'Advanced',
      duration: '25 min',
      description: 'Install and configure a complete smart home system including lighting controls, thermostats, security, and voice integration.',
      skills: ['IoT Devices', 'Network Setup', 'Device Pairing', 'System Programming'],
      objectives: [
        'Install smart switches and dimmers',
        'Configure WiFi mesh network',
        'Pair devices to central hub',
        'Program lighting scenes',
        'Integrate voice control system'
      ],
      color: '#9c27b0'
    },
    {
      id: 'commercial-hvac',
      title: 'Commercial Rooftop Unit',
      trade: 'HVAC',
      icon: <AcUnit />,
      difficulty: 'Expert',
      duration: '40 min',
      description: 'Service and repair a commercial rooftop HVAC unit. Work with larger equipment, multiple zones, and advanced controls.',
      skills: ['Commercial Equipment', 'Zone Control', 'BMS Integration', 'Preventive Maintenance'],
      objectives: [
        'Perform complete PM inspection',
        'Check and adjust economizer operation',
        'Test and balance multiple zones',
        'Verify BMS communication',
        'Complete detailed service report'
      ],
      color: '#00bcd4'
    },
    {
      id: 'pipe-welding',
      title: 'Pipe Welding Certification',
      trade: 'Welder',
      icon: <Whatshot />,
      difficulty: 'Expert',
      duration: '45 min',
      description: 'Practice for pipe welding certification. Weld 6" Schedule 40 pipe in 6G position using multiple processes.',
      skills: ['Pipe Welding', 'Multiple Processes', 'X-Ray Quality', 'Code Compliance'],
      objectives: [
        'Prepare pipe joint properly',
        'Complete root pass with SMAW',
        'Execute hot pass and fill with GMAW',
        'Apply smooth cap pass',
        'Pass simulated X-ray inspection'
      ],
      color: '#ff6b6b'
    }
  ];

  const handleStartSim = (sim) => {
    setSelectedSim(sim);
    setSimActive(true);
    setProgress(0);
    setScore(0);
    simulateProgress(sim);
  };

  const simulateProgress = (sim) => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 2;
      setProgress(currentProgress);
      
      // Simulate score increasing
      setScore(Math.floor(currentProgress * 0.85 + Math.random() * 15));

      if (currentProgress >= 100) {
        clearInterval(interval);
        completeSim(sim);
      }
    }, 300);
  };

  const completeSim = (sim) => {
    const finalScore = Math.floor(75 + Math.random() * 25); // 75-100
    setScore(finalScore);
    
    // Save to completed sims
    const completed = [...completedSims];
    if (!completed.includes(sim.id)) {
      completed.push(sim.id);
      setCompletedSims(completed);
      localStorage.setItem('completedSims', JSON.stringify(completed));
    }
  };

  const handleCloseSim = () => {
    setSimActive(false);
    setSelectedSim(null);
    setProgress(0);
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'success';
      case 'Intermediate': return 'info';
      case 'Advanced': return 'warning';
      case 'Expert': return 'error';
      default: return 'default';
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: 4,
        pb: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            gutterBottom 
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(45deg, #8b5cf6 30%, #00bcd4 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            AR/VR Training Simulations
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
            Immersive hands-on practice in a safe virtual environment
          </Typography>

          {/* 3D Universe Button */}
          <Paper
            elevation={4}
            sx={{
              p: 3,
              mb: 4,
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(0, 188, 212, 0.2) 100%)',
              border: '2px solid rgba(139, 92, 246, 0.4)',
              cursor: 'pointer',
              transition: 'all 0.3s',
              '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: '0 12px 40px rgba(139, 92, 246, 0.3)',
              }
            }}
            onClick={() => navigate('/arvr-3d')}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
              <ViewInAr sx={{ fontSize: 48, color: '#8b5cf6' }} />
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#8b5cf6' }}>
                Enter 3D Synthetic Universe
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary' }}>
              Step into a fully immersive 3D world where you can interact with virtual objects, 
              complete hands-on tasks, and master skills in a realistic environment
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 2 }}>
              <Chip icon={<Psychology />} label="Interactive 3D Objects" color="secondary" />
              <Chip icon={<Stars />} label="Real-time Physics" color="primary" />
              <Chip icon={<EmojiEvents />} label="Hands-on Tasks" color="success" />
            </Box>
          </Paper>
        </Box>

        {/* Alert */}
        <Alert severity="info" icon={<Psychology />} sx={{ mb: 4 }}>
          <Typography variant="body1">
            Practice your skills in immersive virtual environments
          </Typography>
        </Alert>

        {/* Stats Banner */}
        <Box sx={{ mb: 4 }}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 3, 
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(0, 188, 212, 0.1) 100%)',
              border: '1px solid rgba(139, 92, 246, 0.3)'
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                  <EmojiEvents sx={{ color: '#ffd700', fontSize: 32 }} />
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                      {completedSims.length}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Completed
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                  <Timer sx={{ color: '#8b5cf6', fontSize: 32 }} />
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                      {completedSims.length * 23}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Minutes Trained
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                  <TrendingUp sx={{ color: '#00bcd4', fontSize: 32 }} />
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                      {Math.min(completedSims.length * 12, 100)}%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Skill Progress
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>

        {/* Simulations Grid */}
        <Grid container spacing={3}>
          {simulations.map((sim) => (
            <Grid item xs={12} md={6} lg={4} key={sim.id}>
              <Card 
                elevation={3}
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6
                  },
                  border: completedSims.includes(sim.id) ? `2px solid ${sim.color}` : 'none'
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                    <Box sx={{ color: sim.color, display: 'flex' }}>
                      {sim.icon}
                    </Box>
                    <Chip 
                      label={sim.trade} 
                      size="small" 
                      sx={{ 
                        backgroundColor: `${sim.color}20`,
                        color: sim.color,
                        fontWeight: 600
                      }}
                    />
                    {completedSims.includes(sim.id) && (
                      <CheckCircle sx={{ color: '#4caf50', ml: 'auto' }} />
                    )}
                  </Box>

                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {sim.title}
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    <Chip 
                      label={sim.difficulty} 
                      size="small" 
                      color={getDifficultyColor(sim.difficulty)}
                    />
                    <Chip 
                      label={sim.duration} 
                      size="small" 
                      variant="outlined"
                      icon={<Timer />}
                    />
                  </Box>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {sim.description}
                  </Typography>

                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Skills Practiced:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {sim.skills.map((skill, index) => (
                      <Chip 
                        key={index}
                        label={skill} 
                        size="small" 
                        variant="outlined"
                        sx={{ fontSize: '0.7rem' }}
                      />
                    ))}
                  </Box>
                </CardContent>

                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<PlayArrow />}
                    onClick={() => handleStartSim(sim)}
                    sx={{
                      background: `linear-gradient(45deg, ${sim.color} 30%, ${sim.color}dd 90%)`,
                      '&:hover': {
                        background: `linear-gradient(45deg, ${sim.color}dd 30%, ${sim.color}bb 90%)`,
                      }
                    }}
                  >
                    Start Simulation
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Simulation Dialog */}
        <Dialog 
          open={simActive} 
          onClose={handleCloseSim}
          maxWidth="md"
          fullWidth
        >
          {selectedSim && (
            <>
              <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ color: selectedSim.color, display: 'flex' }}>
                  {selectedSim.icon}
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  {selectedSim.title}
                </Box>
                <IconButton onClick={handleCloseSim}>
                  <Close />
                </IconButton>
              </DialogTitle>

              <DialogContent>
                {progress < 100 ? (
                  <Box>
                    <Alert severity="info" sx={{ mb: 3 }}>
                      <Typography variant="body2">
                        Follow the objectives below and practice the techniques you've learned. 
                        Real-time feedback will help you improve!
                      </Typography>
                    </Alert>

                    {/* Simulated Canvas */}
                    <Paper 
                      ref={canvasRef}
                      elevation={3}
                      sx={{ 
                        height: 300, 
                        mb: 3,
                        background: `linear-gradient(135deg, ${selectedSim.color}10 0%, ${selectedSim.color}05 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `2px dashed ${selectedSim.color}40`
                      }}
                    >
                      <Box sx={{ textAlign: 'center' }}>
                        <Stars sx={{ fontSize: 60, color: selectedSim.color, mb: 2 }} />
                        <Typography variant="h6" sx={{ color: selectedSim.color, fontWeight: 600 }}>
                          Simulation in Progress...
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                          {selectedSim.objectives[Math.floor(progress / 20) % selectedSim.objectives.length]}
                        </Typography>
                      </Box>
                    </Paper>

                    {/* Progress */}
                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2">Progress</Typography>
                        <Typography variant="body2" fontWeight={600}>{progress}%</Typography>
                      </Box>
                      <LinearProgress 
                        variant="determinate" 
                        value={progress} 
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: `${selectedSim.color}20`,
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: selectedSim.color
                          }
                        }}
                      />
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2">Current Score</Typography>
                        <Typography variant="body2" fontWeight={600}>{score}/100</Typography>
                      </Box>
                      <LinearProgress 
                        variant="determinate" 
                        value={score} 
                        color={score > 80 ? 'success' : score > 60 ? 'warning' : 'error'}
                        sx={{ height: 8, borderRadius: 4 }}
                      />
                    </Box>

                    {/* Objectives */}
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      Objectives:
                    </Typography>
                    <List dense>
                      {selectedSim.objectives.map((objective, index) => (
                        <ListItem key={index}>
                          <ListItemIcon>
                            {progress > (index * 20) ? (
                              <CheckCircle sx={{ color: '#4caf50' }} />
                            ) : (
                              <Box sx={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid #ccc' }} />
                            )}
                          </ListItemIcon>
                          <ListItemText 
                            primary={objective}
                            sx={{
                              '& .MuiListItemText-primary': {
                                textDecoration: progress > (index * 20) ? 'line-through' : 'none',
                                color: progress > (index * 20) ? 'text.secondary' : 'text.primary'
                              }
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                ) : (
                  <Box sx={{ textAlign: 'center', py: 4 }}>
                    <EmojiEvents sx={{ fontSize: 80, color: '#ffd700', mb: 2 }} />
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                      Simulation Complete!
                    </Typography>
                    <Typography variant="h2" sx={{ color: score >= 90 ? '#4caf50' : score >= 75 ? '#ff9800' : '#f44336', fontWeight: 700, my: 2 }}>
                      {score}/100
                    </Typography>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                      {score >= 90 ? 'Excellent Work!' : score >= 75 ? 'Good Job!' : 'Keep Practicing!'}
                    </Typography>
                    <Divider sx={{ my: 3 }} />
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      You've successfully completed all objectives for this simulation.
                      Keep practicing to improve your score!
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                      {selectedSim.skills.map((skill, index) => (
                        <Chip 
                          key={index}
                          label={skill} 
                          color="primary"
                          variant="outlined"
                          icon={<CheckCircle />}
                        />
                      ))}
                    </Box>
                  </Box>
                )}
              </DialogContent>

              <DialogActions sx={{ p: 2 }}>
                {progress >= 100 ? (
                  <>
                    <Button onClick={handleCloseSim}>
                      Close
                    </Button>
                    <Button 
                      variant="contained" 
                      onClick={() => handleStartSim(selectedSim)}
                      startIcon={<PlayArrow />}
                    >
                      Try Again
                    </Button>
                  </>
                ) : (
                  <Button onClick={handleCloseSim} variant="outlined">
                    Exit Simulation
                  </Button>
                )}
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default ARVRSim;
