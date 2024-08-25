import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { RouterModule } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { env } from "process";
import User from "./user/entities/user.entity";

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
      username: env["POSTGRES_USER"],
      password: env["POSTGRES_PASSWORD"],
      database: env["POSTGRES_DB"],
      synchronize: false,
      logging: true,
      entities: [User],
      migrations: ["src/db/migrations/*{.ts,.js}"],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
