import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import Menu from "../entities/menu.entity";
import { Repository } from "typeorm";

@Injectable()
export default class MenuService {
  constructor(
    @InjectRepository(Menu) private readonly menuRepository: Repository<Menu>,
  ) {}

  async getMenuCardByRestaurantId(restaurantId: string): Promise<Menu> {
    const menu: Menu = await this.menuRepository.findOne({
      where: {
        restaurant: {
          restaurantId: restaurantId,
        },
      },
      relations: {
        menuSections: {
          menuItems: {
            menuItemSizes: true,
          },
        },
      },
    });

    if (!menu) {
      throw new NotFoundException(
        "Menu for this restaurant not found please create one.",
      );
    }

    return menu;
  }

  async createMenuForRestaurant(restaurantId: string): Promise<Menu> {
    const menuExists: boolean = await this.menuRepository.exists({
      where: {
        restaurant: {
          restaurantId: restaurantId,
        },
      },
    });

    if (!menuExists)
      throw new BadRequestException(
        `Menu for restaurant ${restaurantId} already created.`,
      );

    const menu = this.menuRepository.create({
      restaurant: {
        restaurantId: restaurantId,
      },
    });

    return await this.menuRepository.save(menu);
  }
}
