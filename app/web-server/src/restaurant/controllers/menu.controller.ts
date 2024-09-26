import { Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { AppAuthGuard } from "src/user/guards/app-auth.guard";
import RestaurantOwnershipGuard from "../guards/restaurant-ownership.guard";
import { ApiTags } from "@nestjs/swagger";
import MenuService from "../services/menu.service";
import SimpleResponse from "src/common/interfaces/simple-response.interface";
import Menu from "../entities/menu.entity";

@Controller(":restaurantId/menu")
@UseGuards(AppAuthGuard)
@UseGuards(RestaurantOwnershipGuard)
@ApiTags("Restaurant Menu")
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  async getRestaurantMenu(
    @Param("restaurantId") restaurantId: string,
  ): Promise<SimpleResponse<Menu>> {
    return {
      success: true,
      data: await this.menuService.getMenuCardByRestaurantId(restaurantId),
    };
  }

  @Post()
  async createMenuCard(
    @Param("restaurantId") restaurantId: string,
  ): Promise<SimpleResponse<Menu>> {
    return {
      success: true,
      data: await this.menuService.createMenuForRestaurant(restaurantId),
    };
  }
}
