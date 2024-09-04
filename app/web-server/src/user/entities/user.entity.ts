import { IsEmail, Length } from "class-validator";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export default class User {
  @PrimaryGeneratedColumn("uuid")
  userId: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column({ length: 12, nullable: true })
  @Length(12)
  phoneNo?: string;

  @Column({ nullable: true })
  passwordHash: string;

  @Column({ nullable: true })
  passwordSalt: string;

  @Column({ type: "boolean" })
  isEmailVerified: boolean;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  public createdAt: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  public updatedAt: Date;
}
