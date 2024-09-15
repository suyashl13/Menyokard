import { Logger, MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { UserController } from "./controllers/user.controller";
import { UserInfoController } from "./controllers/user-info.controller";
import { UserService } from "./services/user.service";
import { UserInfoService } from "./services/user-info.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthController } from "./controllers/auth.controller";
import User from "./entities/user.entity";
import UserInfo from "./entities/user-info.entity";
import GoogleStrategy from "./services/auth-strategies/google-auth.strategy";
import InjectUserMiddleware from "./middlewares/inject-user.middleware";

@Module({
  imports: [TypeOrmModule.forFeature([User, UserInfo])],
  controllers: [UserController, UserInfoController, AuthController],
  providers: [UserService, UserInfoService, Logger, GoogleStrategy],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(InjectUserMiddleware).forRoutes("*");
  }
}
