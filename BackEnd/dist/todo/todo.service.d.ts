import { ObjectId } from 'mongoose';
import { TaskDto } from './dto/task.dto';
import { TaskRepository } from './repository/task.repository';
export declare class TodoService {
    private readonly taskRepository;
    constructor(taskRepository: TaskRepository);
    getTask(page: number, limit: number): Promise<{
        statusCode: number;
        data: any;
    }>;
    createTask(data: TaskDto): Promise<{
        statusCode: number;
        message: string;
    }>;
    doneTask(taskId: ObjectId): Promise<{
        statusCode: number;
        message: string;
    }>;
    deleteTask(taskId: ObjectId): Promise<{
        statusCode: number;
        message: string;
    }>;
}
