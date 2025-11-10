# Vocational School AI Platform Prototype

## Overview
A full-stack, industry-level prototype for an AI-powered vocational school, including:
- React frontend (students, instructors, employers)
- Node.js/Express backend API
- Python FastAPI AI/ML microservice
- PostgreSQL database
- AR/VR simulation starter (Three.js)
- Job board & analytics dashboard
- Dockerized for local development

## Getting Started

1. Clone the repo
2. Run `docker-compose up --build` from the `infra` directory
3. Access:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:4000
   - AI Service: http://localhost:8000
   - PostgreSQL: localhost:5432 (user/pass: postgres)

## Structure
- `frontend/` - React app
- `backend/` - Node.js/Express API
- `ai-service/` - Python FastAPI AI/ML
- `ar-vr-sim/` - AR/VR simulation starter
- `db/` - Database schema
- `infra/` - Docker Compose setup

## Next Steps
- Implement core features in each module
- Add AR/VR simulation content
- Integrate AI tutor and analytics
