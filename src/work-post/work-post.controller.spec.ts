import { Test, TestingModule } from '@nestjs/testing';
import { WorkPostController } from './work-post.controller';

describe('WorkPostController', () => {
  let controller: WorkPostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkPostController],
    }).compile();

    controller = module.get<WorkPostController>(WorkPostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
