import { Injectable } from '@nestjs/common';
import { CreateTasksTypeDto } from './dto/create-tasks_type.dto';
import { UpdateTasksTypeDto } from './dto/update-tasks_type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksType } from './entities/tasks_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksTypesService {
  constructor(
    @InjectRepository(TasksType)
    private readonly taskTypeRepository: Repository<TasksType>
  ) { }
  async create(createTasksTypeDto: CreateTasksTypeDto) {
    return await this.taskTypeRepository.save(createTasksTypeDto);
  }

  async findAll() {
    return await this.taskTypeRepository.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} tasksType`;
  }

  async update(id: number, updateTasksTypeDto: UpdateTasksTypeDto) {
    return `This action updates a #${id} tasksType`;
  }

  async remove(id: number) {
    return `This action removes a #${id} tasksType`;
  }
}
