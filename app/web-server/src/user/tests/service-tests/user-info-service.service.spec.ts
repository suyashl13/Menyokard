import { Test, TestingModule } from '@nestjs/testing';
import { UserInfoServiceService } from '../../services/user-info-service.service';

describe('UserInfoServiceService', () => {
  let service: UserInfoServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserInfoServiceService],
    }).compile();

    service = module.get<UserInfoServiceService>(UserInfoServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
