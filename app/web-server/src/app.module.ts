import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { RouterModule } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import User from "./user/entities/user.entity";
import UserInfo from "./user/entities/user-info.entity";
import { ConfigModule, ConfigService } from "@nestjs/config";
import * as session from 'express-session';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    RouterModule.register([
      {
        module: UserModule,
        path: "user",
      },
    ]),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
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
      })
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
