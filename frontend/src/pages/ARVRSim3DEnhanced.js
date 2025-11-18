import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Text, 
  Box, 
  Sphere, 
  Cylinder,
  Sky,
  Grid,
  Html
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
  Stepper,
  Step,
  StepLabel,
  Badge,
  Fade,
  Slide
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
  ArrowBack,
  Star,
  PlayArrow,
  CheckCircleOutline,
  Warning,
  TrendingUp
} from '@mui/icons-material';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';

// Enhanced Interactive Wire with visual feedback
function InteractiveWire({ position, rotation, color = 'red', onConnect, id, isConnected, label, targetPosition }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [showSparkle, setShowSparkle] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current && !isConnected) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  const handleClick = () => {
    setShowSparkle(true);
    setTimeout(() => setShowSparkle(false), 1000);
    onConnect(id);
  };

  return (
    <group position={position} rotation={rotation}>
      <Cylinder
        ref={meshRef}
        args={[0.05, 0.05, 2, 8]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleClick}
      >
        <meshStandardMaterial 
          color={isConnected ? '#10b981' : (hovered ? '#fbbf24' : color)} 
          emissive={isConnected ? '#10b981' : (hovered ? '#fbbf24' : color)}
          emissiveIntensity={hovered || isConnected ? 0.8 : 0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </Cylinder>
      
      {/* Connection indicator */}
      {isConnected && showSparkle && (
        <>
          {[...Array(8)].map((_, i) => (
            <Sphere key={i} args={[0.05, 8, 8]} position={[
              Math.cos(i * Math.PI / 4) * 0.3,
              Math.sin(i * Math.PI / 4) * 0.3,
              0
            ]}>
              <meshStandardMaterial 
                color="#fbbf24" 
                emissive="#fbbf24"
                emissiveIntensity={1}
              />
            </Sphere>
          ))}
        </>
      )}
      
      {hovered && (
        <Html position={[0, 1.5, 0]} center>
          <div style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
            color: 'white', 
            padding: '8px 16px', 
            borderRadius: '8px',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
            fontWeight: 'bold'
          }}>
            {isConnected ? '✓ Connected' : `🔌 Connect ${label}`}
          </div>
        </Html>
      )}
    </group>
  );
}

// Enhanced Electrical Panel with detailed components
function ElectricalPanel({ onTaskComplete, tasks, completedTasks, onPointsEarned }) {
  const [connections, setConnections] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [mistakes, setMistakes] = useState(0);

  const steps = [
    { id: 'safety', label: 'Turn off main breaker', completed: false },
    { id: 'hot', label: 'Connect hot wire (red)', completed: false },
    { id: 'neutral', label: 'Connect neutral wire (black)', completed: false },
    { id: 'ground', label: 'Connect ground wire (green)', completed: false },
    { id: 'test', label: 'Turn on breaker to test', completed: false }
  ];

  const handleConnect = (wireId) => {
    const wire = tasks.wires.find(w => w.id === wireId);
    const expectedWire = tasks.wires[currentStep];
    
    if (wire && wire.id === expectedWire.id) {
      // Correct connection
      setConnections(prev => ({ ...prev, [wireId]: true }));
      setCurrentStep(prev => prev + 1);
      onPointsEarned(100);
      
      if (currentStep === 0) onTaskComplete('safety_check');
      if (currentStep + 1 === tasks.wires.length) {
        setTimeout(() => onTaskComplete('connect_wires'), 500);
        setTimeout(() => onTaskComplete('test_circuit'), 1000);
      }
    } else {
      // Wrong connection
      setMistakes(prev => prev + 1);
      onPointsEarned(-20);
    }
  };

  return (
    <group position={[0, 1, 0]}>
      {/* Main Panel Box with detailed texture */}
      <Box args={[3, 4, 0.3]} position={[0, 0, -1]}>
        <meshStandardMaterial 
          color="#2c3e50" 
          metalness={0.9} 
          roughness={0.1}
        />
      </Box>
      
      {/* Warning Label */}
      <Box args={[2, 0.4, 0.05]} position={[0, 2.3, -0.85]}>
        <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.3} />
      </Box>
      <Text
        position={[0, 2.3, -0.8]}
        fontSize={0.15}
        color="black"
        anchorX="center"
        anchorY="middle"
        fontWeight="bold"
      >
        ⚠ HIGH VOLTAGE ⚠
      </Text>
      
      {/* Main Breaker */}
      <Box args={[0.6, 1, 0.2]} position={[0, 1.2, -0.85]}>
        <meshStandardMaterial 
          color={currentStep > 0 ? '#10b981' : '#ef4444'} 
          emissive={currentStep > 0 ? '#10b981' : '#ef4444'}
          emissiveIntensity={0.5}
        />
      </Box>
      <Text
        position={[0, 0.5, -0.8]}
        fontSize={0.12}
        color="white"
        anchorX="center"
      >
        MAIN BREAKER
      </Text>
      
      {/* Circuit Breakers Array */}
      {[0, 1, 2, 3].map((i) => (
        <group key={i} position={[-1.2 + i * 0.8, 0, -0.9]}>
          <Box args={[0.3, 0.6, 0.1]}>
            <meshStandardMaterial color="#34495e" metalness={0.8} />
          </Box>
          <Text
            position={[0, -0.4, 0.1]}
            fontSize={0.08}
            color="white"
            anchorX="center"
          >
            {`${(i + 1) * 20}A`}
          </Text>
        </group>
      ))}

      {/* Interactive Wires with labels */}
      {tasks.wires.map((wire, idx) => (
        <InteractiveWire
          key={wire.id}
          id={wire.id}
          position={wire.position}
          rotation={wire.rotation}
          color={wire.color}
          label={wire.label}
          onConnect={handleConnect}
          isConnected={connections[wire.id]}
        />
      ))}

      {/* Terminal Blocks */}
      {tasks.wires.map((wire, idx) => (
        <group key={`terminal-${wire.id}`} position={wire.terminalPosition || [idx - 1, -1, -0.9]}>
          <Cylinder args={[0.1, 0.1, 0.2, 16]}>
            <meshStandardMaterial 
              color={connections[wire.id] ? '#10b981' : '#95a5a6'} 
              metalness={1}
              roughness={0.2}
            />
          </Cylinder>
        </group>
      ))}

      {/* Bus Bar */}
      <Box args={[2.5, 0.15, 0.1]} position={[0, -1.5, -0.9]}>
        <meshStandardMaterial color="#b87333" metalness={1} roughness={0.1} />
      </Box>

      {/* Current Step Indicator */}
      {currentStep < steps.length && (
        <Html position={[0, -2.5, 0]} center>
          <div style={{
            background: 'rgba(139, 92, 246, 0.95)',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: 'bold',
            boxShadow: '0 4px 20px rgba(139, 92, 246, 0.4)',
            textAlign: 'center',
            minWidth: '200px'
          }}>
            <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '4px' }}>
              Step {currentStep + 1} of {steps.length}
            </div>
            <div>{steps[currentStep].label}</div>
            {mistakes > 0 && (
              <div style={{ fontSize: '11px', color: '#fbbf24', marginTop: '4px' }}>
                ⚠️ {mistakes} mistake{mistakes > 1 ? 's' : ''}
              </div>
            )}
          </div>
        </Html>
      )}
    </group>
  );
}

// Enhanced HVAC Unit with diagnostic tools
function HVACUnit({ onTaskComplete, tasks, completedTasks, onPointsEarned }) {
  const [inspected, setInspected] = useState({});
  const [repaired, setRepaired] = useState({});
  const [selectedTool, setSelectedTool] = useState(null);
  const [diagnosticData, setDiagnosticData] = useState({});

  const tools = [
    { id: 'multimeter', name: 'Multimeter', icon: '⚡', color: '#ef4444' },
    { id: 'wrench', name: 'Wrench', icon: '🔧', color: '#3b82f6' },
    { id: 'screwdriver', name: 'Screwdriver', icon: '🪛', color: '#10b981' }
  ];

  const handleInspect = (partId) => {
    if (!selectedTool) {
      return; // Must select a tool first
    }

    const part = tasks.parts.find(p => p.id === partId);
    if (part.requiredTool === selectedTool) {
      setInspected(prev => {
        const newInspected = { ...prev, [partId]: true };
        const allInspected = tasks.parts.every(p => newInspected[p.id]);
        
        // Show diagnostic data
        setDiagnosticData(prev => ({
          ...prev,
          [partId]: part.diagnosticInfo
        }));
        
        onPointsEarned(50);
        
        if (allInspected && !completedTasks.includes('inspect_unit')) {
          setTimeout(() => onTaskComplete('inspect_unit'), 500);
          onPointsEarned(200);
        }
        return newInspected;
      });
    } else {
      onPointsEarned(-10);
    }
  };

  const handleRepair = (partId) => {
    if (inspected[partId] && selectedTool === 'wrench') {
      setRepaired(prev => {
        const newRepaired = { ...prev, [partId]: true };
        const allRepaired = tasks.parts.every(p => newRepaired[p.id]);
        
        onPointsEarned(100);
        
        if (allRepaired && !completedTasks.includes('repair_parts')) {
          setTimeout(() => onTaskComplete('repair_parts'), 500);
          setTimeout(() => onTaskComplete('test_system'), 1000);
          onPointsEarned(300);
        }
        return newRepaired;
      });
    }
  };

  return (
    <group position={[0, 1.5, 0]}>
      {/* Main HVAC Housing with details */}
      <Box args={[2.5, 3, 1.8]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#ecf0f1" 
          metalness={0.6} 
          roughness={0.3}
        />
      </Box>

      {/* Brand Label */}
      <Box args={[1.5, 0.3, 0.05]} position={[0, 1.6, 0.91]}>
        <meshStandardMaterial color="#3498db" />
      </Box>
      <Text
        position={[0, 1.6, 0.95]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        fontWeight="bold"
      >
        HVAC PRO 3000
      </Text>

      {/* Ventilation Grills */}
      {[-0.6, 0, 0.6].map((x, i) => (
        <Box key={i} args={[0.4, 2, 0.05]} position={[x, 0, 0.91]}>
          <meshStandardMaterial color="#7f8c8d" metalness={0.8} />
        </Box>
      ))}

      {/* Interactive Parts with detailed info */}
      {tasks.parts.map((part, idx) => (
        <group key={part.id} position={part.position}>
          <Sphere
            args={[0.35, 24, 24]}
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
              color={repaired[part.id] ? '#10b981' : inspected[part.id] ? '#fbbf24' : '#ef4444'}
              emissive={repaired[part.id] ? '#10b981' : inspected[part.id] ? '#fbbf24' : '#ef4444'}
              emissiveIntensity={0.5}
              metalness={0.7}
              roughness={0.3}
            />
          </Sphere>
          
          {/* Part status indicator */}
          <Cylinder args={[0.15, 0.15, 0.1, 16]} position={[0, 0.5, 0]}>
            <meshStandardMaterial 
              color={repaired[part.id] ? '#10b981' : inspected[part.id] ? '#fbbf24' : '#ef4444'}
              emissive={repaired[part.id] ? '#10b981' : inspected[part.id] ? '#fbbf24' : '#ef4444'}
              emissiveIntensity={0.8}
            />
          </Cylinder>
          
          <Html position={[0, 0.8, 0]} center>
            <div style={{ 
              background: 'rgba(0,0,0,0.85)', 
              color: 'white', 
              padding: '8px 12px', 
              borderRadius: '8px',
              fontSize: '13px',
              whiteSpace: 'nowrap',
              textAlign: 'center',
              minWidth: '120px',
              border: `2px solid ${repaired[part.id] ? '#10b981' : inspected[part.id] ? '#fbbf24' : '#ef4444'}`
            }}>
              <div style={{ fontWeight: 'bold' }}>{part.name}</div>
              {diagnosticData[part.id] && (
                <div style={{ fontSize: '11px', marginTop: '4px', color: '#fbbf24' }}>
                  {diagnosticData[part.id]}
                </div>
              )}
              <div style={{ fontSize: '10px', marginTop: '4px', opacity: 0.7 }}>
                {repaired[part.id] ? '✓ Repaired' : inspected[part.id] ? '⚠ Needs Repair' : '? Uninspected'}
              </div>
            </div>
          </Html>
        </group>
      ))}

      {/* Condenser Coils */}
      <Cylinder args={[0.9, 0.9, 2.2, 24]} rotation={[Math.PI / 2, 0, 0]} position={[0, -0.3, 0.3]}>
        <meshStandardMaterial color="#95a5a6" metalness={0.8} />
      </Cylinder>

      {/* Compressor */}
      <Cylinder args={[0.5, 0.5, 0.8, 24]} position={[-0.8, -0.8, 0]}>
        <meshStandardMaterial color="#34495e" metalness={0.9} />
      </Cylinder>

      {/* Fan with speed based on repair status */}
      <RotatingFan 
        position={[0, 1, 1]} 
        speed={completedTasks.includes('repair_parts') ? 0.15 : 0.02}
        size={0.8}
      />

      {/* Tool Selection Panel */}
      <Html position={[2.5, 0, 0]} center>
        <div style={{
          background: 'rgba(30, 27, 75, 0.95)',
          padding: '16px',
          borderRadius: '12px',
          minWidth: '180px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)'
        }}>
          <div style={{ 
            color: 'white', 
            fontSize: '14px', 
            fontWeight: 'bold', 
            marginBottom: '12px',
            textAlign: 'center'
          }}>
            🧰 Select Tool
          </div>
          {tools.map(tool => (
            <button
              key={tool.id}
              onClick={() => setSelectedTool(tool.id)}
              style={{
                width: '100%',
                padding: '10px',
                margin: '4px 0',
                background: selectedTool === tool.id ? tool.color : 'rgba(255,255,255,0.1)',
                border: `2px solid ${selectedTool === tool.id ? tool.color : 'transparent'}`,
                borderRadius: '8px',
                color: 'white',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: selectedTool === tool.id ? 'bold' : 'normal',
                transition: 'all 0.2s'
              }}
            >
              {tool.icon} {tool.name}
            </button>
          ))}
        </div>
      </Html>
    </group>
  );
}

// Enhanced Rotating Fan
function RotatingFan({ position, speed, size = 0.6 }) {
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
          args={[0.12, size, 0.05]} 
          rotation={[0, 0, (Math.PI / 2) * i]}
        >
          <meshStandardMaterial 
            color="#7f8c8d" 
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
      ))}
      <Sphere args={[0.15, 16, 16]}>
        <meshStandardMaterial color="#2c3e50" metalness={0.9} />
      </Sphere>
      {/* Fan housing */}
      <Cylinder args={[size + 0.1, size + 0.1, 0.1, 32]} position={[0, 0, -0.1]}>
        <meshStandardMaterial color="#34495e" metalness={0.7} />
      </Cylinder>
    </group>
  );
}

// Enhanced Welding Station with realistic welding mechanics
function WeldingStation({ onTaskComplete, tasks, completedTasks, onPointsEarned }) {
  const [welds, setWelds] = useState({});
  const [currentTool, setCurrentTool] = useState(null);
  const [weldQuality, setWeldQuality] = useState({});
  const [isWelding, setIsWelding] = useState(false);
  const [weldProgress, setWeldProgress] = useState({});

  const handleGrabTool = (tool) => {
    setCurrentTool(tool);
    if (tool === 'torch' && !completedTasks.includes('grab_torch')) {
      onTaskComplete('grab_torch');
      onPointsEarned(50);
    }
  };

  const handleWeld = (jointId) => {
    if (currentTool !== 'torch') return;
    if (welds[jointId]) return; // Already welded

    setIsWelding(true);
    setWeldProgress(prev => ({ ...prev, [jointId]: 0 }));

    // Simulate welding process
    const interval = setInterval(() => {
      setWeldProgress(prev => {
        const newProgress = (prev[jointId] || 0) + 5;
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsWelding(false);
          
          // Calculate weld quality (random for gameplay)
          const quality = 70 + Math.random() * 30;
          setWeldQuality(prev => ({ ...prev, [jointId]: quality }));
          setWelds(prev => ({ ...prev, [jointId]: true }));
          
          const points = quality > 90 ? 150 : quality > 80 ? 100 : 75;
          onPointsEarned(points);
          
          const allWelded = tasks.joints.every(j => welds[j.id] || j.id === jointId);
          if (allWelded && !completedTasks.includes('complete_welds')) {
            setTimeout(() => onTaskComplete('complete_welds'), 500);
            setTimeout(() => onTaskComplete('inspect_quality'), 1000);
            onPointsEarned(250);
          }
        }
        return { ...prev, [jointId]: newProgress };
      });
    }, 100);
  };

  return (
    <group position={[0, 0.5, 0]}>
      {/* Welding Table */}
      <Box args={[5, 0.15, 2.5]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#5d4e37" 
          roughness={0.8}
        />
      </Box>

      {/* Table Legs */}
      {[[-2, 0, -1], [-2, 0, 1], [2, 0, -1], [2, 0, 1]].map((pos, i) => (
        <Cylinder key={i} args={[0.1, 0.1, 1, 16]} position={[pos[0], -0.5, pos[2]]}>
          <meshStandardMaterial color="#2c3e50" metalness={0.9} />
        </Cylinder>
      ))}

      {/* Metal pieces to weld */}
      {tasks.joints.map((joint, idx) => (
        <group key={joint.id} position={joint.position}>
          {/* Base metal piece */}
          <Box args={[0.8, 0.15, 0.3]} position={[-0.2, 0.15, 0]}>
            <meshStandardMaterial color="#95a5a6" metalness={0.9} roughness={0.2} />
          </Box>
          {/* Second metal piece */}
          <Box args={[0.8, 0.15, 0.3]} position={[0.2, 0.15, 0]}>
            <meshStandardMaterial color="#95a5a6" metalness={0.9} roughness={0.2} />
          </Box>
          
          {/* Weld joint indicator */}
          <Sphere
            args={[0.15, 16, 16]}
            position={[0, 0.2, 0]}
            onClick={() => handleWeld(joint.id)}
            onPointerOver={(e) => {
              e.stopPropagation();
              document.body.style.cursor = currentTool === 'torch' ? 'crosshair' : 'pointer';
            }}
            onPointerOut={() => {
              document.body.style.cursor = 'default';
            }}
          >
            <meshStandardMaterial 
              color={welds[joint.id] ? '#fbbf24' : '#ef4444'}
              emissive={welds[joint.id] ? '#fbbf24' : '#ef4444'}
              emissiveIntensity={welds[joint.id] ? 1 : 0.3}
              metalness={1}
              roughness={0.1}
            />
          </Sphere>

          {/* Sparks effect during welding */}
          {weldProgress[joint.id] > 0 && weldProgress[joint.id] < 100 && (
            <>
              {[...Array(12)].map((_, i) => (
                <Sphere 
                  key={i} 
                  args={[0.03, 8, 8]} 
                  position={[
                    Math.cos(i * Math.PI / 6) * 0.3,
                    0.2 + Math.sin(i * Math.PI / 6) * 0.2,
                    Math.sin(i * Math.PI / 6) * 0.3
                  ]}
                >
                  <meshStandardMaterial 
                    color="#ffaa00" 
                    emissive="#ffaa00"
                    emissiveIntensity={2}
                  />
                </Sphere>
              ))}
              {/* Bright light */}
              <pointLight position={[0, 0.2, 0]} intensity={2} color="#ffaa00" distance={2} />
            </>
          )}

          {/* Weld info */}
          <Html position={[0, 0.6, 0]} center>
            <div style={{
              background: welds[joint.id] ? 'rgba(16, 185, 129, 0.9)' : 'rgba(239, 68, 68, 0.9)',
              color: 'white',
              padding: '8px 12px',
              borderRadius: '8px',
              fontSize: '12px',
              textAlign: 'center',
              minWidth: '100px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
            }}>
              <div style={{ fontWeight: 'bold' }}>{joint.label}</div>
              {weldProgress[joint.id] > 0 && weldProgress[joint.id] < 100 && (
                <div style={{ marginTop: '4px' }}>
                  <div style={{
                    height: '4px',
                    background: 'rgba(255,255,255,0.3)',
                    borderRadius: '2px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${weldProgress[joint.id]}%`,
                      background: '#fbbf24',
                      transition: 'width 0.1s'
                    }} />
                  </div>
                </div>
              )}
              {welds[joint.id] && weldQuality[joint.id] && (
                <div style={{ fontSize: '11px', marginTop: '4px' }}>
                  Quality: {weldQuality[joint.id].toFixed(0)}%
                  {weldQuality[joint.id] > 90 && ' ⭐'}
                </div>
              )}
            </div>
          </Html>
        </group>
      ))}

      {/* Welding Equipment */}
      <group position={[-2, 0.5, 0]}>
        {/* Welding torch */}
        <Cylinder 
          args={[0.08, 0.05, 0.8, 16]} 
          rotation={[0, 0, Math.PI / 4]}
          position={[0, 0, 0]}
          onClick={() => handleGrabTool('torch')}
          onPointerOver={(e) => {
            e.stopPropagation();
            document.body.style.cursor = 'grab';
          }}
          onPointerOut={() => {
            document.body.style.cursor = 'default';
          }}
        >
          <meshStandardMaterial 
            color={currentTool === 'torch' ? '#10b981' : '#3b82f6'}
            emissive={currentTool === 'torch' ? '#10b981' : '#3b82f6'}
            emissiveIntensity={currentTool === 'torch' ? 0.5 : 0.2}
            metalness={0.9}
          />
        </Cylinder>
        
        <Html position={[0, 0.5, 0]} center>
          <div style={{
            background: 'rgba(59, 130, 246, 0.9)',
            color: 'white',
            padding: '6px 10px',
            borderRadius: '6px',
            fontSize: '11px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            {currentTool === 'torch' ? '✓ Torch Equipped' : '🔥 Grab Torch'}
          </div>
        </Html>
      </group>

      {/* Welding helmet */}
      <group position={[2, 0.8, 0.5]}>
        <Box args={[0.4, 0.3, 0.3]}>
          <meshStandardMaterial color="#1a1a1a" metalness={0.7} />
        </Box>
        <Box args={[0.35, 0.15, 0.05]} position={[0, 0, 0.16]}>
          <meshStandardMaterial color="#0a5c36" metalness={1} roughness={0.1} />
        </Box>
      </group>

      {/* Gas cylinder */}
      <Cylinder args={[0.15, 0.15, 1.2, 24]} position={[2, 0.7, -0.5]}>
        <meshStandardMaterial color="#ef4444" metalness={0.8} />
      </Cylinder>
    </group>
  );
}

// Main Scene Component
function Scene3D({ simulationType, onTaskComplete, tasks, completedTasks, onPointsEarned }) {
  return (
    <>
      {/* Lighting setup */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, 5, -5]} intensity={0.5} color="#a78bfa" />
      <hemisphereLight args={['#87CEEB', '#8B4513', 0.6]} />
      <spotLight position={[0, 5, 0]} angle={0.3} penumbra={1} intensity={0.5} castShadow />

      {/* Camera and Controls */}
      <PerspectiveCamera makeDefault position={[6, 4, 6]} fov={60} />
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={3}
        maxDistance={20}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Environment */}
      <Sky sunPosition={[100, 20, 100]} />
      <Grid args={[30, 30]} cellColor="#6f7881" sectionColor="#3b4b59" />
      
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#2c3e50" roughness={0.8} />
      </mesh>

      {/* Simulation-specific content */}
      {simulationType === 'electrical' && (
        <ElectricalPanel 
          onTaskComplete={onTaskComplete} 
          tasks={tasks}
          completedTasks={completedTasks}
          onPointsEarned={onPointsEarned}
        />
      )}
      {simulationType === 'hvac' && (
        <HVACUnit 
          onTaskComplete={onTaskComplete} 
          tasks={tasks}
          completedTasks={completedTasks}
          onPointsEarned={onPointsEarned}
        />
      )}
      {simulationType === 'welding' && (
        <WeldingStation 
          onTaskComplete={onTaskComplete} 
          tasks={tasks}
          completedTasks={completedTasks}
          onPointsEarned={onPointsEarned}
        />
      )}
    </>
  );
}

// Main Component
export default function ARVRSim3DEnhanced() {
  const navigate = useNavigate();
  const [selectedSim, setSelectedSim] = useState(null);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [showTutorial, setShowTutorial] = useState(true);

  const simulations = [
    {
      id: 'electrical',
      name: '⚡ Electrical Panel Wiring',
      type: 'electrical',
      description: 'Wire a residential electrical panel following safety protocols and building codes',
      difficulty: 'Intermediate',
      estimatedTime: '15-20 min',
      objectives: ['safety_check', 'connect_wires', 'test_circuit'],
      maxPoints: 650,
      tasks: {
        wires: [
          { 
            id: 'hot', 
            position: [-1, 0, 0], 
            rotation: [0, 0, 0], 
            color: '#ef4444', 
            label: 'Hot (Red)',
            terminalPosition: [-1, -1, -0.9],
            requiredTool: null
          },
          { 
            id: 'neutral', 
            position: [0, 0, 0], 
            rotation: [0, 0, 0], 
            color: '#1a1a1a', 
            label: 'Neutral (Black)',
            terminalPosition: [0, -1, -0.9],
            requiredTool: null
          },
          { 
            id: 'ground', 
            position: [1, 0, 0], 
            rotation: [0, 0, 0], 
            color: '#10b981', 
            label: 'Ground (Green)',
            terminalPosition: [1, -1, -0.9],
            requiredTool: null
          }
        ]
      }
    },
    {
      id: 'hvac',
      name: '❄️ HVAC System Diagnosis',
      type: 'hvac',
      description: 'Diagnose and repair a malfunctioning HVAC unit using proper tools and techniques',
      difficulty: 'Advanced',
      estimatedTime: '20-25 min',
      objectives: ['inspect_unit', 'repair_parts', 'test_system'],
      maxPoints: 800,
      tasks: {
        parts: [
          { 
            id: 'compressor', 
            position: [-0.6, -0.5, 0.5], 
            name: 'Compressor',
            requiredTool: 'multimeter',
            diagnosticInfo: 'Voltage: Low (180V)'
          },
          { 
            id: 'condenser', 
            position: [0, 0.5, 0.5], 
            name: 'Condenser',
            requiredTool: 'screwdriver',
            diagnosticInfo: 'Coils: Dirty/Clogged'
          },
          { 
            id: 'evaporator', 
            position: [0.6, -0.5, 0.5], 
            name: 'Evaporator',
            requiredTool: 'multimeter',
            diagnosticInfo: 'Temp: 55°F (Too high)'
          }
        ]
      }
    },
    {
      id: 'welding',
      name: '🔥 MIG Welding Practice',
      type: 'welding',
      description: 'Practice MIG welding techniques on metal joints with quality assessment',
      difficulty: 'Beginner',
      estimatedTime: '10-15 min',
      objectives: ['grab_torch', 'complete_welds', 'inspect_quality'],
      maxPoints: 750,
      tasks: {
        joints: [
          { id: 'joint1', position: [-1.5, 0.1, -0.5], label: 'Joint A' },
          { id: 'joint2', position: [0, 0.1, -0.5], label: 'Joint B' },
          { id: 'joint3', position: [1.5, 0.1, -0.5], label: 'Joint C' }
        ]
      }
    }
  ];

  useEffect(() => {
    if (selectedSim !== null) {
      const timer = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [selectedSim]);

  useEffect(() => {
    const currentSim = simulations[selectedSim];
    if (currentSim && completedTasks.length === currentSim.objectives.length) {
      calculateScore();
      setShowResults(true);
    }
  }, [completedTasks, selectedSim]);

  const handleSelectSim = (index) => {
    setSelectedSim(index);
    setCompletedTasks([]);
    setElapsedTime(0);
    setScore(0);
    setTotalPoints(0);
    setShowResults(false);
    setShowTutorial(true);
  };

  const handleTaskComplete = (taskId) => {
    if (!completedTasks.includes(taskId)) {
      setCompletedTasks(prev => [...prev, taskId]);
    }
  };

  const handlePointsEarned = (points) => {
    setTotalPoints(prev => Math.max(0, prev + points));
  };

  const calculateScore = () => {
    const currentSim = simulations[selectedSim];
    const timeBonus = Math.max(0, 100 - elapsedTime);
    const pointsScore = (totalPoints / currentSim.maxPoints) * 100;
    const finalScore = Math.min(100, Math.round((pointsScore * 0.7) + (timeBonus * 0.3)));
    setScore(finalScore);
  };

  const handleReset = () => {
    setSelectedSim(null);
    setCompletedTasks([]);
    setElapsedTime(0);
    setScore(0);
    setTotalPoints(0);
    setShowResults(false);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (selectedSim === null) {
    return (
      <MuiBox sx={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
        py: 4 
      }}>
        <MuiBox sx={{ maxWidth: 1200, mx: 'auto', px: 3 }}>
          <MuiBox sx={{ textAlign: 'center', mb: 6 }}>
            <IconButton onClick={() => navigate('/arvr')} sx={{ color: 'white', mb: 2 }}>
              <ArrowBack />
            </IconButton>
            <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
              🎮 Enhanced 3D Training Simulations
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', mb: 1 }}>
              Gamified, Interactive, Hands-On Learning
            </Typography>
            <Chip label="NEW: Detailed Instructions & Scoring" color="secondary" />
          </MuiBox>

          <MuiBox sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
            {simulations.map((sim, index) => (
              <Card 
                key={sim.id} 
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(139, 92, 246, 0.4)',
                    border: '1px solid rgba(139, 92, 246, 0.6)'
                  }
                }}
                onClick={() => handleSelectSim(index)}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
                    {sim.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}>
                    {sim.description}
                  </Typography>
                  
                  <MuiBox sx={{ mb: 2 }}>
                    <Chip label={sim.difficulty} size="small" sx={{ mr: 1 }} color={
                      sim.difficulty === 'Beginner' ? 'success' : 
                      sim.difficulty === 'Intermediate' ? 'warning' : 'error'
                    } />
                    <Chip label={`⏱ ${sim.estimatedTime}`} size="small" />
                  </MuiBox>

                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', display: 'block', mb: 1 }}>
                    Objectives:
                  </Typography>
                  {sim.objectives.map((obj, i) => (
                    <Chip 
                      key={i}
                      label={obj.replace(/_/g, ' ')}
                      size="small"
                      variant="outlined"
                      sx={{ mr: 0.5, mb: 0.5, color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.3)' }}
                    />
                  ))}

                  <Button 
                    variant="contained" 
                    fullWidth 
                    sx={{ 
                      mt: 2, 
                      bgcolor: '#8b5cf6',
                      '&:hover': { bgcolor: '#7c3aed' }
                    }}
                    startIcon={<PlayArrow />}
                  >
                    Start Simulation
                  </Button>
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
      {/* Top HUD with gamification elements */}
      <Paper sx={{ 
        bgcolor: 'rgba(30, 27, 75, 0.95)', 
        p: 2,
        borderRadius: 0,
        borderBottom: '2px solid #8b5cf6'
      }}>
        <MuiBox sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <MuiBox sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton onClick={handleReset} sx={{ color: 'white' }}>
              <ArrowBack />
            </IconButton>
            <MuiBox>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                {currentSim.name}
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                {currentSim.difficulty} • {currentSim.estimatedTime}
              </Typography>
            </MuiBox>
          </MuiBox>
          
          <MuiBox sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <MuiBox sx={{ textAlign: 'center' }}>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                TIME
              </Typography>
              <MuiBox sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Timer sx={{ color: '#8b5cf6', fontSize: 20 }} />
                <Typography variant="h6" sx={{ color: 'white', fontFamily: 'monospace' }}>
                  {formatTime(elapsedTime)}
                </Typography>
              </MuiBox>
            </MuiBox>

            <MuiBox sx={{ textAlign: 'center' }}>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                POINTS
              </Typography>
              <MuiBox sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Star sx={{ color: '#fbbf24', fontSize: 20 }} />
                <Typography variant="h6" sx={{ color: 'white', fontFamily: 'monospace' }}>
                  {totalPoints}/{currentSim.maxPoints}
                </Typography>
              </MuiBox>
            </MuiBox>

            <MuiBox sx={{ textAlign: 'center' }}>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                TASKS
              </Typography>
              <MuiBox sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <CheckCircle sx={{ color: '#10b981', fontSize: 20 }} />
                <Typography variant="h6" sx={{ color: 'white' }}>
                  {completedTasks.length}/{currentSim.objectives.length}
                </Typography>
              </MuiBox>
            </MuiBox>
          </MuiBox>
        </MuiBox>

        {/* Progress Stepper */}
        <MuiBox sx={{ mt: 2 }}>
          <Stepper activeStep={completedTasks.length} alternativeLabel>
            {currentSim.objectives.map((obj, index) => (
              <Step key={obj} completed={completedTasks.includes(obj)}>
                <StepLabel
                  StepIconProps={{
                    sx: { 
                      color: completedTasks.includes(obj) ? '#10b981' : 'rgba(255,255,255,0.3)',
                      '&.Mui-active': { color: '#8b5cf6' }
                    }
                  }}
                  sx={{ 
                    '& .MuiStepLabel-label': { 
                      color: 'white',
                      fontSize: '0.75rem'
                    }
                  }}
                >
                  {obj.replace(/_/g, ' ')}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
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
              onPointsEarned={handlePointsEarned}
            />
          </Suspense>
        </Canvas>

        {/* Instructions Overlay */}
        <Fade in={showTutorial}>
          <Paper sx={{
            position: 'absolute',
            top: 20,
            right: 20,
            p: 2,
            bgcolor: 'rgba(0,0,0,0.9)',
            maxWidth: 320,
            border: '2px solid #8b5cf6'
          }}>
            <MuiBox sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="subtitle2" sx={{ color: '#8b5cf6', fontWeight: 'bold' }}>
                <Lightbulb sx={{ fontSize: 16, mr: 1, verticalAlign: 'middle' }} />
                How to Play
              </Typography>
              <IconButton size="small" onClick={() => setShowTutorial(false)} sx={{ color: 'white' }}>
                <Cancel fontSize="small" />
              </IconButton>
            </MuiBox>
            <Typography variant="body2" sx={{ color: 'white', fontSize: '0.85rem', mb: 1 }}>
              <TouchApp sx={{ fontSize: 14, verticalAlign: 'middle', mr: 0.5 }} />
              <strong>Click</strong> objects to interact<br />
              🖱️ <strong>Left-drag</strong>: Rotate view<br />
              🖱️ <strong>Right-drag</strong>: Pan camera<br />
              📜 <strong>Scroll</strong>: Zoom in/out<br />
            </Typography>
            <Alert severity="info" sx={{ mt: 1, fontSize: '0.75rem' }}>
              Follow the step-by-step instructions. Earn bonus points for accuracy and speed!
            </Alert>
          </Paper>
        </Fade>

        {/* Points Notification */}
        {totalPoints > 0 && (
          <Fade in timeout={500}>
            <Paper sx={{
              position: 'absolute',
              bottom: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              px: 3,
              py: 1,
              bgcolor: 'rgba(16, 185, 129, 0.9)',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}>
              <Star sx={{ color: '#fbbf24' }} />
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                {totalPoints} Points
              </Typography>
            </Paper>
          </Fade>
        )}
      </MuiBox>

      {/* Results Dialog */}
      <Dialog open={showResults} maxWidth="md" fullWidth>
        <DialogTitle sx={{ 
          bgcolor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
          color: 'white', 
          textAlign: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}>
          <EmojiEvents sx={{ fontSize: 60, color: '#fbbf24', mb: 1 }} />
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            {score >= 90 ? '🏆 Outstanding!' : score >= 75 ? '⭐ Great Job!' : score >= 60 ? '👍 Good Work!' : '💪 Keep Practicing!'}
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ bgcolor: '#1e1b4b', color: 'white', pt: 3 }}>
          <MuiBox sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h1" sx={{ 
              color: score >= 90 ? '#10b981' : score >= 75 ? '#fbbf24' : '#8b5cf6', 
              fontWeight: 'bold',
              mb: 1
            }}>
              {score}%
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}>
              Final Score
            </Typography>

            <MuiBox sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 3 }}>
              <MuiBox>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                  Time
                </Typography>
                <Typography variant="h6" sx={{ color: 'white' }}>
                  {formatTime(elapsedTime)}
                </Typography>
              </MuiBox>
              <MuiBox>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                  Points
                </Typography>
                <Typography variant="h6" sx={{ color: 'white' }}>
                  {totalPoints}/{currentSim.maxPoints}
                </Typography>
              </MuiBox>
              <MuiBox>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                  Tasks
                </Typography>
                <Typography variant="h6" sx={{ color: 'white' }}>
                  {completedTasks.length}/{currentSim.objectives.length}
                </Typography>
              </MuiBox>
            </MuiBox>

            <LinearProgress 
              variant="determinate" 
              value={score} 
              sx={{ 
                height: 10, 
                borderRadius: 5,
                bgcolor: 'rgba(255,255,255,0.1)',
                '& .MuiLinearProgress-bar': {
                  bgcolor: score >= 90 ? '#10b981' : score >= 75 ? '#fbbf24' : '#8b5cf6'
                }
              }} 
            />
          </MuiBox>

          <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
            Completed Tasks:
          </Typography>
          <List>
            {currentSim.objectives.map((obj) => (
              <ListItem key={obj}>
                <ListItemIcon>
                  <CheckCircle sx={{ color: '#10b981' }} />
                </ListItemIcon>
                <ListItemText 
                  primary={obj.replace(/_/g, ' ').toUpperCase()} 
                  primaryTypographyProps={{ sx: { color: 'white', fontWeight: 'bold' } }}
                />
              </ListItem>
            ))}
          </List>

          {score >= 90 && (
            <Alert severity="success" sx={{ mt: 2 }}>
              <strong>Perfect Score!</strong> You've mastered this simulation. Ready for the next challenge?
            </Alert>
          )}
        </DialogContent>
        <DialogActions sx={{ bgcolor: '#1e1b4b', p: 2, gap: 1 }}>
          <Button 
            onClick={handleReset} 
            variant="outlined" 
            sx={{ color: 'white', borderColor: 'white' }}
            startIcon={<ArrowBack />}
          >
            Back to Menu
          </Button>
          <Button 
            onClick={() => {
              setShowResults(false);
              handleSelectSim(selectedSim);
            }} 
            variant="contained" 
            sx={{ bgcolor: '#8b5cf6', '&:hover': { bgcolor: '#7c3aed' } }}
            startIcon={<Refresh />}
          >
            Try Again
          </Button>
          {score >= 75 && selectedSim < simulations.length - 1 && (
            <Button 
              onClick={() => {
                setShowResults(false);
                handleSelectSim(selectedSim + 1);
              }} 
              variant="contained" 
              sx={{ bgcolor: '#10b981', '&:hover': { bgcolor: '#059669' } }}
              endIcon={<TrendingUp />}
            >
              Next Challenge
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </MuiBox>
  );
}
