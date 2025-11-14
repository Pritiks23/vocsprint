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


This project uses a modern, modular full-stack architecture. The frontend is built with React, providing a responsive, component-based user interface with dynamic routing and Material UI for a production-quality look and feel. The backend API is developed using Node.js with Express, which handles HTTP requests, user authentication, business logic, and serves as a bridge between the frontend and the database. For AI-driven features and advanced computation, a Python FastAPI microservice is integrated, enabling scalable, asynchronous endpoints for tasks like AI tutoring, vision, or voice processing. Data persistence is managed with PostgreSQL, a robust relational database, which stores user profiles, training progress, job postings, and application data. The backend communicates with PostgreSQL using secure, parameterized queries, ensuring data integrity and scalability. This architecture allows each layer to scale independently and leverages the strengths of each technology for a seamless, high-performance vocational training platform.

GPT-4.1 • 0x

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
