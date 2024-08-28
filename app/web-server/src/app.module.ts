import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { RouterModule } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import User from "./user/entities/user.entity";
import UserInfo from "./user/entities/user-info.entity";

@Module({
  imports: [
    UserModule,
    RouterModule.register([
      {
        module: UserModule,
        path: "user",
      },
    ]),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: 'menyokard_user',
      password: 'postgres',
      database: 'menyokard_db',
      synchronize: true,
      logging: true,
      entities: [User, UserInfo],
      migrations: ["src/db/migrations/*{.ts,.js}"],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
