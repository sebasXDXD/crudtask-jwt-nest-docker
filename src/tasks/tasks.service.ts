import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { TasksType } from '../tasks_types/entities/tasks_type.entity';
import { UserActiveI } from '../common/interfaces/user-active.interface';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    @InjectRepository(TasksType)
    private readonly taskTypeRepository: Repository<TasksType>
  ) { }


  async create(createTaskDto: CreateTaskDto,user:UserActiveI) {
    try {
      const taskType = await this.taskTypeRepository.findOneBy({ id: createTaskDto.id_type })
      if (!taskType) {
        throw new BadRequestException("task type not found");
      }
      return await this.taskRepository.save({ ...createTaskDto, taskType, userEmail:user.email});
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    return await this.taskRepository.find();
  }

  async findOne(id: number) {
    return await this.taskRepository.findOneBy({ id });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    try {
      //  return await this.taskRepository.update(id, updateTaskDto);

    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    return await this.taskRepository.softDelete({ id });

  }
}
