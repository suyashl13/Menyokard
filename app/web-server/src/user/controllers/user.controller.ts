import { Controller, Get, Logger, LoggerService, Req, Session } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from '../entities/user.entity';
import { Repository } from 'typeorm';
import { Request } from 'express';

@Controller()
export class UserController {
    constructor(@InjectRepository(User) private userRepository: Repository<User>, private logger: Logger) { }

    @Get()
    async getUsers(@Session() session: Record<string, any>) {
        session.visits = session.visits ? session.visits + 1 : 1;
        return ('');
    }
}
