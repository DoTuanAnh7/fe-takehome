import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskDto } from '../dto/task.dto';
import { Task, TaskDocument } from '../schema/task.schema';

@Injectable()
export class TaskRepository {
    constructor(
        @InjectModel(Task.name) private taskModel: Model<TaskDocument>,
    ) {}

    async create(data: TaskDto) {
        const createTask = new this.taskModel(data);
        return createTask.save();
    }

    async findByConditions(
        conditions: any,
        pageSize: number,
        pageNumber: number,
    ) {
        conditions.is_delete = false;

        var result = this.taskModel.find(conditions);


        if (pageNumber != null && pageSize != null) {
            result = result.skip((pageNumber - 1) * pageSize).limit(pageSize);
        }

        return result;
    }

    async updateByConditions(conditions: any, data: any) {
        return this.taskModel.updateOne(conditions, data);
    }

    async deleteByConditions(conditions: any) {
        return this.taskModel.deleteMany(conditions);
    }
}
