import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../../controllers/user.controller';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import User from '../../entities/user.entity';
import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common'

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: getRepositoryToken(User),
          useClass: Repository
        },
        Logger
      ]
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be empty as of now', () => {
    expect(controller.getUsers()).toBe([]);
  })

});
