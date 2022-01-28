import express, { json } from 'express';
import morgan from 'morgan';
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';

// initialize routes
const app = express();

// middleware
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/projects/', projectRoutes);
app.use('/tas/tasks/', taskRoutes);


export default app;