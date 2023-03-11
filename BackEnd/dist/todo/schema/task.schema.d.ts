import { Document, ObjectId } from 'mongoose';
export type TaskDocument = Task & Document;
export declare class Task {
    _id: ObjectId;
    task_name: string;
    status: string;
    created_at: string;
}
export declare const TaskSchema: mongoose.Schema<TClass>;
declare const _default: import("@nestjs/common").DynamicModule;
export default _default;
