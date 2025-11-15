import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Text, 
  Box, 
  Sphere, 
  Cylinder,
  Environment,
  Sky,
  Grid,
  Html,
  useGLTF
} from '@react-three/drei';
import {
  Box as MuiBox,
  Typography,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  LinearProgress,
  Chip,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Alert,
  Tooltip
} from '@mui/material';
import {
  CheckCircle,
  Cancel,
  Help,
  Lightbulb,
  Build,
  TouchApp,
  Timer,
  EmojiEvents,
  Refresh,
  ArrowBack
} from '@mui/icons-material';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';

// Interactive Wire Component (for electrical simulations)
function InteractiveWire({ position, rotation, color = 'red', onConnect, id, isConnected }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame(() => {
    if (meshRef.current && !isConnected) {
      meshRef.current.rotation.z += 0.01;
    }
  });

  return (
    <group position={position} rotation={rotation}>
      <Cylinder
        ref={meshRef}
        args={[0.05, 0.05, 2, 8]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => onConnect(id)}
      >
        <meshStandardMaterial 
          color={isConnected ? 'green' : (hovered ? 'yellow' : color)} 
          emissive={hovered ? 'yellow' : 'black'}
          emissiveIntensity={hovered ? 0.5 : 0}
        />
      </Cylinder>
      {hovered && (
        <Html position={[0, 1.5, 0]}>
          <div style={{ 
            background: 'rgba(0,0,0,0.8)', 
            color: 'white', 
            padding: '5px 10px', 
            borderRadius: '5px',
            whiteSpace: 'nowrap'
          }}>
            {isConnected ? 'Connected ✓' : 'Click to connect'}
          </div>
        </Html>
      )}
    </group>
  );
}

// Electrical Panel Component
function ElectricalPanel({ onTaskComplete, tasks, completedTasks }) {
  const [connections, setConnections] = useState({});

  const handleConnect = (wireId) => {
    setConnections(prev => {
      const newConnections = { ...prev, [wireId]: true };
      const allConnected = tasks.wires.every(w => newConnections[w.id]);
      if (allConnected) {
        setTimeout(() => onTaskComplete('connect_wires'), 500);
      }
      return newConnections;
    });
  };

  return (
    <group position={[0, 1, 0]}>
      {/* Main Panel Box */}
      <Box args={[3, 4, 0.2]} position={[0, 0, -1]}>
        <meshStandardMaterial color="#444444" metalness={0.8} roughness={0.2} />
      </Box>
      
      {/* Circuit Breakers */}
      {[0, 1, 2, 3].map((i) => (
        <Box key={i} args={[0.3, 0.5, 0.1]} position={[-1 + i * 0.7, 1, -0.9]}>
          <meshStandardMaterial color="#222222" />
        </Box>
      ))}

      {/* Interactive Wires */}
      {tasks.wires.map((wire, idx) => (
        <InteractiveWire
          key={wire.id}
          id={wire.id}
          position={wire.position}
          rotation={wire.rotation}
          color={wire.color}
          onConnect={handleConnect}
          isConnected={connections[wire.id]}
        />
      ))}

      {/* Bus Bar */}
      <Box args={[2.5, 0.1, 0.1]} position={[0, -1.5, -0.9]}>
        <meshStandardMaterial color="copper" metalness={1} roughness={0.1} />
      </Box>

      {/* Label */}
      <Text
        position={[0, 2.5, -0.8]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Electrical Panel
      </Text>
    </group>
  );
}

// HVAC Unit Component
function HVACUnit({ onTaskComplete, tasks, completedTasks }) {
  const [inspected, setInspected] = useState({});
  const [repaired, setRepaired] = useState({});

  const handleInspect = (partId) => {
    setInspected(prev => {
      const newInspected = { ...prev, [partId]: true };
      const allInspected = tasks.parts.every(p => newInspected[p.id]);
      if (allInspected) {
        setTimeout(() => onTaskComplete('inspect_unit'), 500);
      }
      return newInspected;
    });
  };

  const handleRepair = (partId) => {
    if (inspected[partId]) {
      setRepaired(prev => {
        const newRepaired = { ...prev, [partId]: true };
        const allRepaired = tasks.parts.every(p => newRepaired[p.id]);
        if (allRepaired) {
          setTimeout(() => onTaskComplete('repair_parts'), 500);
        }
        return newRepaired;
      });
    }
  };

  return (
    <group position={[0, 1.5, 0]}>
      {/* Main HVAC Housing */}
      <Box args={[2, 3, 1.5]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#cccccc" metalness={0.5} roughness={0.5} />
      </Box>

      {/* Interactive Parts */}
      {tasks.parts.map((part, idx) => (
        <group key={part.id} position={part.position}>
          <Sphere
            args={[0.3, 16, 16]}
            onPointerOver={(e) => {
              e.stopPropagation();
              document.body.style.cursor = 'pointer';
            }}
            onPointerOut={() => {
              document.body.style.cursor = 'default';
            }}
            onClick={(e) => {
              e.stopPropagation();
              if (!inspected[part.id]) {
                handleInspect(part.id);
              } else if (!repaired[part.id]) {
                handleRepair(part.id);
              }
            }}
          >
            <meshStandardMaterial 
              color={repaired[part.id] ? 'green' : inspected[part.id] ? 'yellow' : 'red'}
              emissive={repaired[part.id] ? 'green' : inspected[part.id] ? 'yellow' : 'red'}
              emissiveIntensity={0.3}
            />
          </Sphere>
          <Html position={[0, 0.5, 0]}>
            <div style={{ 
              background: 'rgba(0,0,0,0.8)', 
              color: 'white', 
              padding: '3px 8px', 
              borderRadius: '3px',
              fontSize: '12px',
              whiteSpace: 'nowrap'
            }}>
              {part.name}
            </div>
          </Html>
        </group>
      ))}

      {/* Condenser Coils */}
      <Cylinder args={[0.8, 0.8, 2, 16]} rotation={[Math.PI / 2, 0, 0]} position={[0, -0.5, 0.5]}>
        <meshStandardMaterial color="#888888" />
      </Cylinder>

      {/* Fan */}
      <RotatingFan position={[0, 1, 0.8]} speed={completedTasks.includes('repair_parts') ? 0.1 : 0} />
    </group>
  );
}

// Rotating Fan Component
function RotatingFan({ position, speed }) {
  const fanRef = useRef();
  
  useFrame(() => {
    if (fanRef.current) {
      fanRef.current.rotation.z += speed;
    }
  });

  return (
    <group position={position} ref={fanRef}>
      {[0, 1, 2, 3].map((i) => (
        <Box 
          key={i} 
          args={[0.1, 0.6, 0.05]} 
          rotation={[0, 0, (Math.PI / 2) * i]}
        >
          <meshStandardMaterial color="#666666" />
        </Box>
      ))}
      <Sphere args={[0.1, 16, 16]}>
        <meshStandardMaterial color="#333333" />
      </Sphere>
    </group>
  );
}

// Welding Station Component
function WeldingStation({ onTaskComplete, tasks, completedTasks }) {
  const [welds, setWelds] = useState([]);
  const [currentTool, setCurrentTool] = useState(null);

  const handleWeld = (jointId) => {
    if (currentTool === 'torch') {
      setWelds(prev => {
        const newWelds = [...prev, jointId];
        const allWelded = tasks.joints.every(j => newWelds.includes(j.id));
        if (allWelded) {
          setTimeout(() => onTaskComplete('complete_welds'), 500);
        }
        return newWelds;
      });
    }
  };

  const handleGrab = (tool) => {
    setCurrentTool(tool);
    onTaskComplete('grab_torch');
  };

  return (
    <group position={[0, 0.5, 0]}>
      {/* Welding Table */}
      <Box args={[4, 0.1, 2]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#8B4513" />
      </Box>

      {/* Metal Pieces to Weld */}
      {tasks.joints.map((joint, idx) => (
        <group key={joint.id} position={joint.position}>
          <Box args={[0.8, 0.1, 0.3]}>
            <meshStandardMaterial 
              color={welds.includes(joint.id) ? '#FFD700' : '#C0C0C0'} 
              metalness={1}
              roughness={0.2}
            />
          </Box>
          {!welds.includes(joint.id) && (
            <Sphere
              args={[0.15, 16, 16]}
              position={[0, 0.2, 0]}
              onClick={(e) => {
                e.stopPropagation();
                handleWeld(joint.id);
              }}
              onPointerOver={(e) => {
                e.stopPropagation();
                document.body.style.cursor = 'pointer';
              }}
              onPointerOut={() => {
                document.body.style.cursor = 'default';
              }}
            >
              <meshStandardMaterial 
                color={currentTool === 'torch' ? 'orange' : 'red'}
                emissive="red"
                emissiveIntensity={0.5}
              />
            </Sphere>
          )}
        </group>
      ))}

      {/* Welding Torch (Tool) */}
      <group 
        position={[-1.5, 0.5, 0.5]}
        onClick={(e) => {
          e.stopPropagation();
          handleGrab('torch');
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'default';
        }}
      >
        <Cylinder args={[0.05, 0.05, 0.8, 8]}>
          <meshStandardMaterial color={currentTool === 'torch' ? 'yellow' : 'blue'} />
        </Cylinder>
        <Html position={[0, 0.5, 0]}>
          <div style={{ 
            background: 'rgba(0,0,0,0.8)', 
            color: 'white', 
            padding: '3px 8px', 
            borderRadius: '3px',
            fontSize: '12px'
          }}>
            {currentTool === 'torch' ? 'Selected ✓' : 'Grab Torch'}
          </div>
        </Html>
      </group>

      {/* Welding Sparks Effect */}
      {currentTool === 'torch' && welds.length > 0 && (
        <group position={tasks.joints[welds.length - 1]?.position || [0, 0, 0]}>
          <pointLight intensity={2} color="orange" distance={2} />
        </group>
      )}
    </group>
  );
}

// Main 3D Scene Component
function Scene3D({ simulationType, onTaskComplete, tasks, completedTasks }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[5, 3, 5]} />
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={3}
        maxDistance={15}
      />
      
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, 10, -10]} intensity={0.5} />
      <hemisphereLight color="#ffffff" groundColor="#444444" intensity={0.6} />

      {/* Environment */}
      <Sky sunPosition={[100, 20, 100]} />
      <Grid args={[20, 20]} cellColor="#6f6f6f" sectionColor="#9d4b4b" />
      
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      {/* Render appropriate simulation */}
      {simulationType === 'electrical' && (
        <ElectricalPanel 
          onTaskComplete={onTaskComplete} 
          tasks={tasks}
          completedTasks={completedTasks}
        />
      )}
      
      {simulationType === 'hvac' && (
        <HVACUnit 
          onTaskComplete={onTaskComplete} 
          tasks={tasks}
          completedTasks={completedTasks}
        />
      )}
      
      {simulationType === 'welding' && (
        <WeldingStation 
          onTaskComplete={onTaskComplete} 
          tasks={tasks}
          completedTasks={completedTasks}
        />
      )}

      {/* Lighting for scene */}
      <Environment preset="warehouse" />
    </>
  );
}

// Main Component
export default function ARVRSim3D() {
  const navigate = useNavigate();
  const [selectedSim, setSelectedSim] = useState(null);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  // Simulation configurations
  const simulations = {
    electrical: {
      id: 'electrical',
      name: 'House Wiring - 3D Simulation',
      description: 'Connect wires in the electrical panel correctly',
      tasks: {
        wires: [
          { id: 'wire1', position: [-1, 0.5, -0.5], rotation: [0, 0, 0], color: 'red', label: 'Hot' },
          { id: 'wire2', position: [0, 0.5, -0.5], rotation: [0, 0, 0], color: 'black', label: 'Neutral' },
          { id: 'wire3', position: [1, 0.5, -0.5], rotation: [0, 0, 0], color: 'green', label: 'Ground' },
        ]
      },
      objectives: ['grab_tools', 'connect_wires', 'test_circuit'],
      type: 'electrical'
    },
    hvac: {
      id: 'hvac',
      name: 'HVAC Diagnostics - 3D Simulation',
      description: 'Inspect and repair the HVAC unit components',
      tasks: {
        parts: [
          { id: 'compressor', position: [-0.5, 0, 0], name: 'Compressor' },
          { id: 'condenser', position: [0.5, 0, 0], name: 'Condenser' },
          { id: 'evaporator', position: [0, 0.8, 0], name: 'Evaporator' },
        ]
      },
      objectives: ['inspect_unit', 'repair_parts', 'test_system'],
      type: 'hvac'
    },
    welding: {
      id: 'welding',
      name: 'MIG Welding - 3D Simulation',
      description: 'Complete the weld joints on the metal pieces',
      tasks: {
        joints: [
          { id: 'joint1', position: [-1, 0.15, 0] },
          { id: 'joint2', position: [0, 0.15, 0] },
          { id: 'joint3', position: [1, 0.15, 0] },
        ]
      },
      objectives: ['grab_torch', 'complete_welds', 'inspect_quality'],
      type: 'welding'
    }
  };

  // Timer effect
  useEffect(() => {
    if (selectedSim && !showResults) {
      const interval = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [selectedSim, startTime, showResults]);

  const handleSelectSim = (simId) => {
    setSelectedSim(simId);
    setStartTime(Date.now());
    setCompletedTasks([]);
    setElapsedTime(0);
    setShowResults(false);
    setScore(0);
  };

  const handleTaskComplete = (taskId) => {
    if (!completedTasks.includes(taskId)) {
      setCompletedTasks(prev => {
        const newCompleted = [...prev, taskId];
        const sim = simulations[selectedSim];
        
        // Check if all objectives completed
        if (sim.objectives.every(obj => newCompleted.includes(obj))) {
          const timeTaken = Math.floor((Date.now() - startTime) / 1000);
          const timeBonus = Math.max(0, 50 - timeTaken);
          const accuracy = 100;
          const finalScore = Math.min(100, 50 + timeBonus + (accuracy / 2));
          
          setScore(finalScore);
          setTimeout(() => setShowResults(true), 1000);
        }
        
        return newCompleted;
      });
    }
  };

  const handleReset = () => {
    setSelectedSim(null);
    setCompletedTasks([]);
    setStartTime(null);
    setElapsedTime(0);
    setShowResults(false);
    setScore(0);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!selectedSim) {
    return (
      <MuiBox sx={{ 
        minHeight: '100vh', 
        bgcolor: 'rgba(30, 27, 75, 0.95)',
        py: 4,
        px: 2
      }}>
        <MuiBox sx={{ maxWidth: 1200, mx: 'auto' }}>
          <MuiBox sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <IconButton onClick={() => navigate('/arvr')} sx={{ mr: 2, color: 'white' }}>
              <ArrowBack />
            </IconButton>
            <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold' }}>
              3D Synthetic Universe
            </Typography>
          </MuiBox>

          <Alert severity="info" sx={{ mb: 4 }}>
            <Typography variant="body1">
              Welcome to the immersive 3D training environment! Select a simulation below to begin hands-on practice in a virtual world.
            </Typography>
          </Alert>

          <MuiBox sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3 }}>
            {Object.values(simulations).map((sim) => (
              <Card
                key={sim.id}
                sx={{
                  bgcolor: 'rgba(139, 92, 246, 0.1)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 24px rgba(139, 92, 246, 0.4)',
                    border: '1px solid rgba(139, 92, 246, 0.6)',
                  }
                }}
                onClick={() => handleSelectSim(sim.id)}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ color: '#a78bfa', mb: 2, fontWeight: 'bold' }}>
                    {sim.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3 }}>
                    {sim.description}
                  </Typography>
                  <MuiBox sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Chip label="Interactive 3D" color="secondary" size="small" />
                    <Build sx={{ color: '#a78bfa' }} />
                  </MuiBox>
                </CardContent>
              </Card>
            ))}
          </MuiBox>
        </MuiBox>
      </MuiBox>
    );
  }

  const currentSim = simulations[selectedSim];

  return (
    <MuiBox sx={{ height: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#000' }}>
      {/* Top HUD */}
      <Paper sx={{ 
        bgcolor: 'rgba(30, 27, 75, 0.95)', 
        p: 2,
        borderRadius: 0,
        borderBottom: '2px solid #8b5cf6'
      }}>
        <MuiBox sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <MuiBox sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton onClick={handleReset} sx={{ color: 'white' }}>
              <ArrowBack />
            </IconButton>
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
              {currentSim.name}
            </Typography>
          </MuiBox>
          
          <MuiBox sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <MuiBox sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Timer sx={{ color: '#8b5cf6' }} />
              <Typography variant="h6" sx={{ color: 'white', fontFamily: 'monospace' }}>
                {formatTime(elapsedTime)}
              </Typography>
            </MuiBox>
            <MuiBox sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircle sx={{ color: '#10b981' }} />
              <Typography variant="h6" sx={{ color: 'white' }}>
                {completedTasks.length} / {currentSim.objectives.length}
              </Typography>
            </MuiBox>
          </MuiBox>
        </MuiBox>

        {/* Objectives List */}
        <MuiBox sx={{ mt: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          {currentSim.objectives.map((obj) => (
            <Chip
              key={obj}
              icon={completedTasks.includes(obj) ? <CheckCircle /> : <Help />}
              label={obj.replace(/_/g, ' ').toUpperCase()}
              color={completedTasks.includes(obj) ? 'success' : 'default'}
              variant={completedTasks.includes(obj) ? 'filled' : 'outlined'}
            />
          ))}
        </MuiBox>
      </Paper>

      {/* 3D Canvas */}
      <MuiBox sx={{ flex: 1, position: 'relative' }}>
        <Canvas shadows>
          <Suspense fallback={null}>
            <Scene3D 
              simulationType={currentSim.type}
              onTaskComplete={handleTaskComplete}
              tasks={currentSim.tasks}
              completedTasks={completedTasks}
            />
          </Suspense>
        </Canvas>

        {/* Instructions Overlay */}
        <Paper sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          p: 2,
          bgcolor: 'rgba(0,0,0,0.8)',
          maxWidth: 300
        }}>
          <Typography variant="subtitle2" sx={{ color: '#8b5cf6', mb: 1, fontWeight: 'bold' }}>
            <Lightbulb sx={{ fontSize: 16, mr: 1, verticalAlign: 'middle' }} />
            Controls
          </Typography>
          <Typography variant="body2" sx={{ color: 'white', fontSize: '0.85rem' }}>
            • <TouchApp sx={{ fontSize: 14, verticalAlign: 'middle' }} /> Click objects to interact<br />
            • Drag to rotate view<br />
            • Scroll to zoom<br />
            • Right-click + drag to pan
          </Typography>
        </Paper>
      </MuiBox>

      {/* Results Dialog */}
      <Dialog open={showResults} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ bgcolor: '#1e1b4b', color: 'white', textAlign: 'center' }}>
          <EmojiEvents sx={{ fontSize: 48, color: '#fbbf24', mb: 1 }} />
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            Simulation Complete!
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ bgcolor: '#1e1b4b', color: 'white', pt: 3 }}>
          <MuiBox sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h2" sx={{ color: '#10b981', fontWeight: 'bold', mb: 1 }}>
              {score}%
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)' }}>
              Time: {formatTime(elapsedTime)}
            </Typography>
          </MuiBox>

          <List>
            {currentSim.objectives.map((obj) => (
              <ListItem key={obj}>
                <ListItemIcon>
                  <CheckCircle sx={{ color: '#10b981' }} />
                </ListItemIcon>
                <ListItemText 
                  primary={obj.replace(/_/g, ' ').toUpperCase()} 
                  primaryTypographyProps={{ sx: { color: 'white' } }}
                />
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions sx={{ bgcolor: '#1e1b4b', p: 2 }}>
          <Button onClick={handleReset} variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>
            Back to Menu
          </Button>
          <Button 
            onClick={() => {
              setShowResults(false);
              handleSelectSim(selectedSim);
            }} 
            variant="contained" 
            sx={{ bgcolor: '#8b5cf6' }}
          >
            <Refresh sx={{ mr: 1 }} />
            Try Again
          </Button>
        </DialogActions>
      </Dialog>
    </MuiBox>
  );
}
