import { Router } from 'express';
import { createProject } from '../controllers/project.controller';
const router = Router();

// /api/projects/

router.post('', createProject);

export default router;