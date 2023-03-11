import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { TaskDto } from './dto/task.dto';
import { TaskRepository } from './repository/task.repository';

@Injectable()
export class TodoService {

    constructor(private readonly taskRepository: TaskRepository) { }

    async getTask(page: number, limit: number) {
        const task = await this.taskRepository.findByConditions({}, limit, page);
        return {
            statusCode: 200,
            data: task
        }
    }

    async createTask(data: TaskDto) {

        data.status = "Running"
        await this.taskRepository.create(data);
        return {
            statusCode: 201,
            message: "Created"
        }
    }


    async doneTask(taskId: ObjectId) {
        await this.taskRepository.updateByConditions({ _id: taskId }, { status: "Done" });
        return {
            statusCode: 200,
            message: "Update done"
        }
    }

    async deleteTask(taskId: ObjectId) {
        await this.taskRepository.deleteByConditions({ _id: taskId });
        return {
            statusCode: 200,
            message: "Delete done"
        }
    }
}
