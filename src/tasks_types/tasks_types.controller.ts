import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksTypesService } from './tasks_types.service';
import { CreateTasksTypeDto } from './dto/create-tasks_type.dto';
import { UpdateTasksTypeDto } from './dto/update-tasks_type.dto';

@Controller('tasks-types')
export class TasksTypesController {
  constructor(private readonly tasksTypesService: TasksTypesService) {}

  @Post()
  create(@Body() createTasksTypeDto: CreateTasksTypeDto) {
    return this.tasksTypesService.create(createTasksTypeDto);
  }

  @Get()
  findAll() {
    return this.tasksTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tasksTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTasksTypeDto: UpdateTasksTypeDto) {
    return this.tasksTypesService.update(+id, updateTasksTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tasksTypesService.remove(+id);
  }
}
