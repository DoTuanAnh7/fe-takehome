import { ObjectId } from 'mongoose';
import { TaskDto } from './dto/task.dto';
import { TodoService } from './todo.service';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    getTask(page?: number, limit?: number): Promise<{
        statusCode: number;
        data: (import("mongoose").Document<unknown, {}, import("./schema/task.schema").TaskDocument> & Omit<import("./schema/task.schema").Task & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        }, never>)[];
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
