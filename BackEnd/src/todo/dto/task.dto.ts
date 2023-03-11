import {
    IsNotEmpty,
    IsString,
} from 'class-validator';
export class TaskDto {
    @IsString()
    @IsNotEmpty()
    task_name: string;

    status: string;

    @IsString()
    @IsNotEmpty()
    created_at: string;
}
