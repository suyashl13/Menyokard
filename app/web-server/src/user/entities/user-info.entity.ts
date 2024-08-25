import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import User from "./user.entity";

@Entity()
export default class UserInfo {
    @PrimaryGeneratedColumn('uuid')
    accoumtId: string

    @Column('string', { length: 40})
    firstName: string

    @Column('string', { length: 40})
    lastName: string

    @Column('date')
    dateOfBirth: Date

    @Column('string', { length: 1 })
    gender: string

    @OneToOne(() => User, (user: User) => user.userId)
    userId: string

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
