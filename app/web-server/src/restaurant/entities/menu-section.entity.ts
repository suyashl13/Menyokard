import {
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Menu from "./menu.entity";
import MenuItem from "./menu-item.entity";

export default class MenuSection {
  @PrimaryGeneratedColumn("uuid")
  menuSectionId: string;

  @Column({
    type: "varchar",
    length: 45,
    nullable: false,
  })
  menuSectionTitle: string;

  @ManyToOne(() => Menu, (menu) => menu.menuSections)
  menu: Menu;

  @OneToMany(() => MenuItem, (menuItem) => menuItem.menuSection)
  menuItems: MenuItem[];

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
