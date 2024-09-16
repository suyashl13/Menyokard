import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { RouterModule } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import User from "./user/entities/user.entity";
import UserInfo from "./user/entities/user-info.entity";
import { ConfigModule, ConfigService } from "@nestjs/config";
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
} from "./constants/env.constants";
import { RestaurantModule } from "./restaurant/restaurant.module";

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
        host: configService.get(DB_HOST),
        port: Number.parseInt(configService.get(DB_PORT), 10),
        username: configService.get(DB_USERNAME),
        password: configService.get(DB_PASSWORD),
        database: configService.get(DB_NAME),
        synchronize: true,
        logging: true,
        entities: [User, UserInfo],
        migrations: ["src/db/migrations/*{.ts,.js}"],
      }),
    }),
    RestaurantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
