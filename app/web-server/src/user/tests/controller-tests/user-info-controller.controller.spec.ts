import { Test, TestingModule } from '@nestjs/testing';
import { UserInfoControllerController } from './user-info-controller.controller';

describe('UserInfoControllerController', () => {
  let controller: UserInfoControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserInfoControllerController],
    }).compile();

    controller = module.get<UserInfoControllerController>(UserInfoControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
