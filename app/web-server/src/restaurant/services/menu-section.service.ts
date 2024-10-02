import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import MenuSection from "../entities/menu-section.entity";
import { Repository } from "typeorm";
import MenuService from "./menu.service";
import Menu from "../entities/menu.entity";

@Injectable()
export default class MenuSectionService {
  constructor(
    @InjectRepository(MenuSection)
    private readonly menuSectionRepository: Repository<MenuSection>,
    private readonly menuService: MenuService,
  ) {}

  async createMenuSection(
    restaurantId: string,
    menuSectionTitle: string,
  ): Promise<MenuSection> {
    const menu: Menu =
      await this.menuService.getMenuCardByRestaurantId(restaurantId);

    const menuSection = this.menuSectionRepository.create();
    menuSection.menu = menu;
    menuSection.menuSectionTitle = menuSectionTitle;

    return await this.menuSectionRepository.save(menuSection);
  }
}
