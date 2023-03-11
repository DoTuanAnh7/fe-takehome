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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const task_schema_1 = require("../schema/task.schema");
let TaskRepository = class TaskRepository {
    constructor(taskModel) {
        this.taskModel = taskModel;
    }
    async create(data) {
        const createTask = new this.taskModel(data);
        return createTask.save();
    }
    async findByConditions(conditions, pageSize, pageNumber) {
        conditions.is_delete = false;
        var result = this.taskModel.find(conditions);
        if (pageNumber != null && pageSize != null) {
            result = result.skip((pageNumber - 1) * pageSize).limit(pageSize);
        }
        return result;
    }
    async updateByConditions(conditions, data) {
        return this.taskModel.updateOne(conditions, data);
    }
    async deleteByConditions(conditions) {
        return this.taskModel.deleteMany(conditions);
    }
};
TaskRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(task_schema_1.Task.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], TaskRepository);
exports.TaskRepository = TaskRepository;
//# sourceMappingURL=task.repository.js.map