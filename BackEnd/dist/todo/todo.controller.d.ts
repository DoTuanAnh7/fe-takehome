import { ObjectId } from 'mongoose';
import { TaskDto } from './dto/task.dto';
import { TodoService } from './todo.service';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    getTask(page?: number, limit?: number): Promise<{
        statusCode: number;
        data: any;
    }>;
    createTask(body: TaskDto): Promise<{
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
