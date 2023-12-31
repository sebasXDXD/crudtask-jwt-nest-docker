import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { TasksTypesModule } from '../tasks_types/tasks_types.module';

@Module({
  imports:[TypeOrmModule.forFeature([Task]),TasksTypesModule],
  controllers: [TasksController],
  providers: [TasksService,TasksService],
})
export class TasksModule {}
