import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import User from "./user.entity";

@Entity()
export default class UserInfo {
  @PrimaryGeneratedColumn("uuid")
  accountId: string;

  @Column({ length: 40 })
  firstName: string;

  @Column({ length: 40 })
  lastName: string;

  @Column()
  dateOfBirth: Date;

  @Column({ length: 1 })
  gender: string;

  @OneToOne(() => User, (user: User) => user.userInfo)
  @JoinColumn()
  user: User;

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
