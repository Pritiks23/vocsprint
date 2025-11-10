import React from 'react';


import { Container, Typography, Grid } from '@mui/material';
import TrainingModuleCard from '../components/TrainingModuleCard';

const trainings = [
  {
    title: 'Electrician Training',
    description: 'Hands-on modules for wiring, circuits, safety, and smart systems. Includes AR/VR practice and AI step-by-step coaching.',
    lessons: [
      { title: 'Intro to Electrical Safety', content: 'Learn about PPE, lockout/tagout, and safe work practices.' },
      { title: 'Basic Wiring', content: 'Understand wiring diagrams, color codes, and hands-on wire connections.' },
      { title: 'Circuits & Breakers', content: 'Explore circuit types, breaker panels, and troubleshooting.' },
      { title: 'Smart Home Systems', content: 'Install and configure smart switches, outlets, and lighting.' },
      { title: 'Conduit Bending', content: 'Practice bending conduit for clean, code-compliant installations.' },
      { title: 'Electrical Code', content: 'Study NEC code requirements for residential and commercial jobs.' },
      { title: 'Panel Upgrades', content: 'Learn to upgrade and label electrical panels safely.' },
      { title: 'Troubleshooting', content: 'Diagnose and repair common electrical faults.' }
    ]
  },
  {
    title: 'HVAC Technician Training',
    description: 'Learn installation, maintenance, and troubleshooting of heating, ventilation, and air conditioning systems with immersive simulations.',
    lessons: [
      { title: 'HVAC Safety', content: 'Understand refrigerant safety, electrical hazards, and safe tool use.' },
      { title: 'System Components', content: 'Identify and explain compressors, condensers, evaporators, and thermostats.' },
      { title: 'Diagnostics', content: 'Practice troubleshooting common HVAC issues with interactive scenarios.' },
      { title: 'Thermostat Installation', content: 'Install and program smart and traditional thermostats.' },
      { title: 'Ductwork', content: 'Design, install, and seal ductwork for efficiency.' },
      { title: 'Refrigerant Handling', content: 'Learn safe recovery, charging, and leak detection.' },
      { title: 'Preventive Maintenance', content: 'Perform seasonal maintenance and inspections.' },
      { title: 'Customer Communication', content: 'Develop skills for explaining repairs and maintenance to clients.' }
    ]
  },
  {
    title: 'Welder Training',
    description: 'Master welding techniques, safety, and fabrication with real-time AI feedback and virtual practice environments.',
    lessons: [
      { title: 'Welding Safety', content: 'Review PPE, fire prevention, and safe workspace setup.' },
      { title: 'Welding Techniques', content: 'Learn MIG, TIG, and stick welding basics with video and AR guidance.' },
      { title: 'Project Practice', content: 'Complete a virtual weld and get instant feedback on technique.' },
      { title: 'Metal Preparation', content: 'Clean, cut, and prep metal for strong welds.' },
      { title: 'Blueprint Reading', content: 'Interpret welding symbols and fabrication drawings.' },
      { title: 'Weld Inspection', content: 'Check welds for quality and code compliance.' },
      { title: 'Fabrication Projects', content: 'Build real and virtual projects from plans.' },
      { title: 'Welding Automation', content: 'Intro to robotic and automated welding systems.' }
    ]
  }
];

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h3" align="center" gutterBottom color="text.primary">
        Welcome to VocSprint
      </Typography>
      <Typography variant="h6" align="center" paragraph color="text.secondary">
        Empowering the next generation of skilled tradespeople with AI-driven training.
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {trainings.map((t) => (
          <Grid item xs={12} md={4} key={t.title}>
            <TrainingModuleCard title={t.title} description={t.description} lessons={t.lessons} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
