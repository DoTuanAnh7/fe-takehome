import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { ParseObjectIdPipe } from 'src/pipe/ParseObjectIdPipe.pipe';
import { TaskDto } from './dto/task.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) { }

    @Get('')
    async getTask(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
    ) {
        return this.todoService.getTask(page, limit);
    }

    @Post('')
    async createTask(@Body() body: TaskDto) {
        return this.todoService.createTask(body);
    }

    @Patch(':id')
    async doneTask(@Param('id', ParseObjectIdPipe) taskId: ObjectId) {
        return this.todoService.doneTask(taskId);
    }

    @Delete(':id')
    async deleteTask(@Param('id', ParseObjectIdPipe) taskId: ObjectId) {
        return this.todoService.deleteTask(taskId);
    }

}
