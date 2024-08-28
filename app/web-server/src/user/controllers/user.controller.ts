import { Controller, Get, Logger, LoggerService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from '../entities/user.entity';
import { Repository } from 'typeorm';

@Controller()
export class UserController {
    constructor(@InjectRepository(User) private userRepository: Repository<User>, private logger: Logger) { }

    @Get()
    async getUsers() {
        return (await this.userRepository.find());
    }
}
