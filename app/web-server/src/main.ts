import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { WinstonModule } from "nest-winston";
import { transports, format } from "winston";
import { AppModule } from "./app.module";
import "winston-daily-rotate-file";
import * as session from "express-session";
import { ConfigService } from "@nestjs/config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { API_PREFIX } from "./common/constants/env.constants";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        // file on daily rotation (error only)
        new transports.DailyRotateFile({
          // %DATE will be replaced by the current date
          filename: `logs/error/%DATE%/%DATE%-error.log`,
          level: "error",
          format: format.combine(format.timestamp(), format.json()),
          datePattern: "YYYY-MM-DD-HH",
          frequency: "1h",
          zippedArchive: false, // don't want to zip our logs
          maxFiles: "30d", // will keep log until they are older than 30 days
        }),
        // same for all levels
        new transports.DailyRotateFile({
          filename: `logs/info/%DATE%/%DATE%-application.log`,
          format: format.combine(format.timestamp(), format.json()),
          frequency: "1h",
          datePattern: "YYYY-MM-DD-HH",
          zippedArchive: false,
          maxFiles: "30d",
        }),
        new transports.Console({
          format: format.combine(
            format.cli(),
            format.splat(),
            format.timestamp(),
            format.printf((info) => {
              return `${info.timestamp} ${info.level}: ${info.message}`;
            }),
          ),
        }),
      ],
    }),
  });

  const configService: ConfigService = app.get(ConfigService);

  app.use(
    session({
      secret: configService.get("SESSION_SECRET"),
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
      },
    }),
  );
  app.setGlobalPrefix(API_PREFIX);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle("API Documentation - Menukard")
    .setDescription("Menyokard API is realtime cafe management system")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(API_PREFIX + "/docs", app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}

bootstrap();
