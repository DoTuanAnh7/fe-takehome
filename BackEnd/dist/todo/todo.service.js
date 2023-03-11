"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const task_repository_1 = require("./repository/task.repository");
let TodoService = class TodoService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async getTask(page, limit) {
        const task = await this.taskRepository.findByConditions({}, limit, page);
        return {
            statusCode: 200,
            data: task
        };
    }
    async createTask(data) {
        data.status = "Running";
        await this.taskRepository.create(data);
        return {
            statusCode: 201,
            message: "Created"
        };
    }
    async doneTask(taskId) {
        await this.taskRepository.updateByConditions({ _id: taskId }, { status: "Done" });
        return {
            statusCode: 200,
            message: "Update done"
        };
    }
    async deleteTask(taskId) {
        await this.taskRepository.deleteByConditions({ _id: taskId });
        return {
            statusCode: 200,
            message: "Delete done"
        };
    }
};
TodoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [task_repository_1.TaskRepository])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map