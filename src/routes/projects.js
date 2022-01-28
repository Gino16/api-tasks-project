import { Router } from 'express';
import { createProject, deleteProjectByID, getProjectByID, getProjects } from '../controllers/project.controller';
const router = Router();

// /api/projects/

router.post('/', createProject);

router.get('/', getProjects);

router.get('/:id', getProjectByID);

router.put('/:id');

router.delete('/:id', deleteProjectByID);
export default router;