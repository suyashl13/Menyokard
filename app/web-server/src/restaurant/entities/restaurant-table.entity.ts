import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Floor from "./floor.entity";

@Entity()
export default class RestaurantTable {
  @PrimaryGeneratedColumn("uuid")
  restaurantTableId: string;

  @Column("varchar")
  name: string;

  @ManyToOne(() => Floor, (floor) => floor.restaurantTables)
  floor: Floor;

  @Column({ type: "boolean", default: false })
  isDeleted: boolean;

  @Column({ type: "boolean", default: false })
  isDisabled: boolean;

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
