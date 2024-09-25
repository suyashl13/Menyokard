import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import MenuSection from "./menu-section.entity";
import MenuItem from "./menu-item.entity";
import Restaurant from "./restaurant.entity";

@Entity()
export default class Menu {
  @PrimaryGeneratedColumn("uuid")
  menuId: string;

  @OneToOne(() => Restaurant, (restaurant) => restaurant.menu)
  @JoinColumn()
  restaurant: Restaurant;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  public createdAt: Date;

  @OneToMany(() => MenuSection, (menuSection) => menuSection.menu)
  menuSections: MenuSection[];

  @OneToMany(() => MenuItem, (menuItem) => menuItem.menu)
  menuItems: MenuItem[];

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  public updatedAt: Date;
}
