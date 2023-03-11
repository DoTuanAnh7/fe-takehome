/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { TaskDto } from '../dto/task.dto';
import { Task, TaskDocument } from '../schema/task.schema';
export declare class TaskRepository {
    private taskModel;
    constructor(taskModel: Model<TaskDocument>);
    create(data: TaskDto): Promise<import("mongoose").Document<unknown, {}, TaskDocument> & Omit<Task & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findByConditions(conditions: any, pageSize: number, pageNumber: number): Promise<(import("mongoose").Document<unknown, {}, TaskDocument> & Omit<Task & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    updateByConditions(conditions: any, data: any): Promise<import("mongodb").UpdateResult>;
    deleteByConditions(conditions: any): Promise<import("mongodb").DeleteResult>;
}
