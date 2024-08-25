import { Module } from "@nestjs/common";
import { UserControllerController } from './controllers/user-controller.controller';
import { UserInfoControllerController } from './controllers/user-info-controller.controller';
import { UserServiceService } from './services/user-service.service';
import { UserInfoServiceService } from './services/user-info-service.service';

@Module({
  controllers: [UserControllerController, UserInfoControllerController],
  providers: [UserServiceService, UserInfoServiceService]
})
export class UserModule {}
