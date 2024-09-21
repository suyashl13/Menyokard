import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Menu from "./menu.entity";
import MenuSection from "./menu-section.entity";
import { IsUrl } from "class-validator";
import MenuItemSize from "./menu-item-size.entity";

@Entity()
export default class MenuItem {
  @PrimaryGeneratedColumn("uuid")
  menuItemId: string;

  @ManyToOne(() => Menu, (menu) => menu.menuItems)
  menu: Menu;

  @ManyToOne(() => MenuSection, (menuSection) => menuSection.menuItems)
  menuSection: MenuSection;

  @Column({ type: "boolean", default: false })
  isDeleted: boolean;

  @OneToMany(() => MenuItemSize, (menuItemSize) => menuItemSize.menuItem)
  menuItemSizes: MenuItemSize[];

  @Column("varchar")
  @IsUrl()
  imageUrl: string;

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
