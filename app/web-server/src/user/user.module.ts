import { Logger, Module } from "@nestjs/common";
import { UserController } from './controllers/user.controller';
import { UserInfoController } from './controllers/user-info.controller';
import { UserServiceService } from './services/user-service.service';
import { UserInfoServiceService } from './services/user-info-service.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import User from "./entities/user.entity";
import UserInfo from "./entities/user-info.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      UserInfo
    ])
  ],
  controllers: [UserController, UserInfoController],
  providers: [UserServiceService, UserInfoServiceService, Logger]
})
export class UserModule {}
