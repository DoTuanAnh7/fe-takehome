import { PipeTransform } from '@nestjs/common';
import { ObjectId } from 'mongoose';
export declare class ParseObjectIdPipe implements PipeTransform<any, ObjectId> {
    transform(value: any): ObjectId;
}
