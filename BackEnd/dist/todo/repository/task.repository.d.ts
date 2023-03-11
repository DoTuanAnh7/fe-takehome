import { Model } from 'mongoose';
import { TaskDto } from '../dto/task.dto';
import { TaskDocument } from '../schema/task.schema';
export declare class TaskRepository {
    private taskModel;
    constructor(taskModel: Model<TaskDocument>);
    create(data: TaskDto): Promise<any>;
    findByConditions(conditions: any, pageSize: number, pageNumber: number): Promise<any>;
    updateByConditions(conditions: any, data: any): Promise<any>;
    deleteByConditions(conditions: any): Promise<any>;
}
