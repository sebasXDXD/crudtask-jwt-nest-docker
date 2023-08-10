import { Test, TestingModule } from '@nestjs/testing';
import { TasksTypesController } from './tasks_types.controller';
import { TasksTypesService } from './tasks_types.service';

describe('TasksTypesController', () => {
  let controller: TasksTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksTypesController],
      providers: [TasksTypesService],
    }).compile();

    controller = module.get<TasksTypesController>(TasksTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
