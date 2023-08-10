import { Test, TestingModule } from '@nestjs/testing';
import { TasksTypesService } from './tasks_types.service';

describe('TasksTypesService', () => {
  let service: TasksTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksTypesService],
    }).compile();

    service = module.get<TasksTypesService>(TasksTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
