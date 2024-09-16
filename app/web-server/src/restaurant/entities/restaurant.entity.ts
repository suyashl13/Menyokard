import { IsEmail, IsPhoneNumber } from "class-validator";
import User from "src/user/entities/user.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn("uuid")
  restaurantId: string;

  @IsEmail()
  @Column("varchar", { unique: true, length: 50 })
  restaurantEmail: string;

  @IsPhoneNumber()
  @Column("varchar", { unique: true, length: 12 })
  restaurantPhone: string;

  @Column("varchar", { unique: true, length: 100 })
  restaurantAddress: string;

  @Column("varchar", { unique: true, length: 40 })
  restaurantCity: string;

  @Column("bool", { default: false })
  isBlocked: boolean;

  @ManyToOne(() => User, (user) => user.restaurants)
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
