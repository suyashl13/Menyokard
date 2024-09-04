import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import User from "../entities/user.entity";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

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

    const user = await this.userRepository.create({
      email: emailId,
      passwordHash: passwordHash,
      passwordSalt: salt,
      isEmailVerified: authType === "google",
    });

    await this.userRepository.save(user);
  }

  async checkUserExistsByEmail(email: string) {
    return await this.userRepository.exists({
      where: { email: email },
    });
  }
}
