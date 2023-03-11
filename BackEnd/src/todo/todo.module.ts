import { Module } from '@nestjs/common';
import { TaskRepository } from './repository/task.repository';
import TaskSchema from './schema/task.schema';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';


@Module({
  imports: [TaskSchema],
  controllers: [TodoController],
  providers: [TodoService, TaskRepository],
})
export class TodoModule {}