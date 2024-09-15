import { Controller, Get, Logger, Req, UseGuards } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import User from "../entities/user.entity";
import { Repository } from "typeorm";
import { Request } from "express";
import { AppAuthGuard } from "../guards/app-auth.guard";

@Controller()
export class UserController {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private logger: Logger,
  ) {}

  @Get()
  @UseGuards(AppAuthGuard)
  getUser(@Req() req: Request) {
    if (!req.user) {
      return {
        success: false,
        message: "User not authenticated.",
      };
    }
    return {
      success: true,
      data: {
        user: req.user,
      },
    };
  }
}
