import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import MenuItem from "./menu-item.entity";

@Entity()
export default class MenuItemSize {
  @PrimaryGeneratedColumn("uuid")
  menuItemSizeId: string;

  @ManyToOne(() => MenuItem, (menuItem) => menuItem.menuItemSizes)
  menuItem: MenuItem;

  @Column("boolean")
  isDeleted: boolean;

  @Column("double precision")
  cost: number;

  @OneToMany(() => MenuItem, (menuItem) => menuItem.menu)
  menuItems: MenuItem[];

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  public updatedAt: Date;
}
