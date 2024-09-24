import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RestaurantController } from "./controllers/restaurant.controller";
import { RestaurantSlugController } from "./controllers/restaurant-slug.controller";
import { MenuController } from "./controllers/menu.controller";
import { MenuSectionController } from "./controllers/menu-section.controller";
import { MenuSectionSlugController } from "./controllers/menu-section-slug.controller";
import { MenuSectionSlugMenuItemSlugController } from "./controllers/menu-section-slug-menu-item-slug.controller";
import { RestaurantService } from "./services/restaurant.service";
import Restaurant from "./entities/restaurant.entity";
import Menu from "./entities/menu.entity";
import MenuSection from "./entities/menu-section.entity";
import MenuItem from "./entities/menu-item.entity";
import MenuItemSize from "./entities/menu-item-size.entity";
import Floor from "./entities/floor.entity";
import RestaurantTable from "./entities/restaurant-table.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Restaurant,
      Menu,
      MenuSection,
      MenuItem,
      MenuItemSize,
      Floor,
      RestaurantTable,
    ]),
  ],
  controllers: [
    RestaurantController,
    RestaurantSlugController,
    MenuController,
    MenuSectionController,
    MenuSectionSlugController,
    MenuSectionSlugMenuItemSlugController,
  ],
  providers: [RestaurantService],
})
export class RestaurantModule {}
