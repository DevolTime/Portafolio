import type { Request, Response } from 'express';
import { createProjectService, getProjectsService, ValidationError } from '../services/project.service.js';

const createProject = async (req: Request, res: Response) => {
  try {
    const nuevoProyecto = await createProjectService(req.body);
    return res.status(201).json(nuevoProyecto);
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Error al crear el proyecto', error });
  }
}

const getProjects = async (_req: Request, res: Response) => {
  try {
    const proyectos = await getProjectsService();
    return res.status(200).json(proyectos);
  } catch (error) {
    return res.status(500).json({ message: 'Error al listar proyectos', error });
  }
}

export { createProject, getProjects };