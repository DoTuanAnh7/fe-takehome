import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform, Type } from 'class-transformer';
import { Document, ObjectId, SchemaTypes, Types } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
    @Transform(({ value }) => value.toString())
    _id: ObjectId;
  
    @Prop()
    task_name: string;

    @Prop()
    status: string;

    @Prop()
    created_at: string;

}

export const TaskSchema = SchemaFactory.createForClass(Task);

export default MongooseModule.forFeature([
    { name: Task.name, schema: TaskSchema },
]);
