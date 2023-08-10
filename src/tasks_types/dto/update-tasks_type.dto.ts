import { PartialType } from '@nestjs/mapped-types';
import { CreateTasksTypeDto } from './create-tasks_type.dto';

export class UpdateTasksTypeDto extends PartialType(CreateTasksTypeDto) {}
