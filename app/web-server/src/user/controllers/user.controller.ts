import { Controller, Get, Logger, Session } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import User from "../entities/user.entity";
import { Repository } from "typeorm";

@Controller()
export class UserController {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private logger: Logger,
  ) {}

  @Get()
  async getUsers(@Session() session: Record<string, any>) {
    return JSON.stringify(session);
  }
}
