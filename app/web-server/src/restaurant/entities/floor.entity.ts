import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Restaurant from "./restaurant.entity";
import RestaurantTable from "./restaurant-table.entity";

@Entity()
export default class Floor {
  @PrimaryGeneratedColumn("uuid")
  floorId: string;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant)
  restaurant: Restaurant;

  @Column({ type: "boolean", default: false })
  isDisabled: boolean;

  @OneToMany(() => RestaurantTable, (restaurantTable) => restaurantTable.floor)
  restaurantTables: RestaurantTable[];

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
