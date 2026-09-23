import mongoose from 'mongoose';
import Project from '../models/Project.js';

export class ValidationError extends Error { }

type CreateProjectData = {
    title: string;
    description?: string;
    image?: string;
    technologies?: string[];
    repoUrl?: string;
    liveUrl?: string;
};

type UpdateProjectData = {
    title?: string;
    description?: string;
    image?: string;
    technologies?: string[];
    repoUrl?: string;
    liveUrl?: string;
};

const createProjectService = async (data: CreateProjectData) => {
    if (!data.title) {
        throw new ValidationError('El título es obligatorio');
    }
    return Project.create(data);
};

const getProjectsService = async () => {
    return Project.find().sort({createdAt: -1})
};

const getProjectByIdService = async (id: string) => {
if (!mongoose.isValidObjectId(id)) throw new ValidationError('Id de proyecto invalido')
    return Project.findById(id)
};

const updateProjectService = async (id: string, data: UpdateProjectData) => {
if (!mongoose.isValidObjectId(id)) throw new ValidationError('Id de projecto invalido');
return Project.findByIdAndUpdate(id, data, {new: true, runValidators: true});
};

const deleteProjectService = async (id: string) => {
if (!mongoose.isValidObjectId(id)) throw new ValidationError('Id de proyecto invalido')
    return Project.findByIdAndDelete(id);
};

export { createProjectService,getProjectsService , getProjectByIdService, updateProjectService, deleteProjectService };