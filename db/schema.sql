-- PostgreSQL schema for core entities

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password_hash VARCHAR(255),
  role VARCHAR(20) -- student, instructor, employer
);

CREATE TABLE learning_paths (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  skill VARCHAR(100),
  progress INTEGER DEFAULT 0
);

CREATE TABLE jobs (
  id SERIAL PRIMARY KEY,
  employer_id INTEGER REFERENCES users(id),
  title VARCHAR(100),
  description TEXT,
  requirements TEXT,
  is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE applications (
  id SERIAL PRIMARY KEY,
  job_id INTEGER REFERENCES jobs(id),
  user_id INTEGER REFERENCES users(id),
  status VARCHAR(20) -- applied, interviewing, hired, rejected
);
