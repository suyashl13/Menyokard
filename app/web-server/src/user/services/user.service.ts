import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import User from "../entities/user.entity";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  async registerUser(
    emailId: string,
    plainTextPassword?: string,
    authType?: "google" | "password",
  ) {
    let salt: string;
    let passwordHash: string;

    if (plainTextPassword) {
      salt = await bcrypt.genSalt();
      passwordHash = await bcrypt.hash(plainTextPassword, salt);
    }

    const user = this.userRepository.create({
      email: emailId,
      passwordHash: passwordHash,
      passwordSalt: salt,
      isEmailVerified: authType === "google",
    });
    
    return (await this.userRepository.save(user));
  }

  async checkUserExistsByEmail(email: string) {
    return await this.userRepository.exists({
      where: { email: email },
    });
  }

  async getUserByEmailId(email: string): Promise<User> | null {
    return await this.userRepository.findOne({
      where: {
        email: email,
      },
    });
  }
}
