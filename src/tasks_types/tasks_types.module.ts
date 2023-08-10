import { Module } from '@nestjs/common';
import { TasksTypesService } from './tasks_types.service';
import { TasksTypesController } from './tasks_types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksType } from './entities/tasks_type.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TasksType])],
  controllers: [TasksTypesController],
  providers: [TasksTypesService],
  exports:[TypeOrmModule]
})
export class TasksTypesModule {}
