import { Body, Controller, Param, Post, UseGuards } from "@nestjs/common";
import RestaurantOwnershipGuard from "../guards/restaurant-ownership.guard";
import { AppAuthGuard } from "src/user/guards/app-auth.guard";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import MenuSectionService from "../services/menu-section.service";
import CreateMenuSectionDto from "../dtos/create-menu-section.dto";
import SimpleResponse from "src/common/interfaces/simple-response.interface";
import MenuSection from "../entities/menu-section.entity";

@Controller(":restaurantId/menu/section")
@ApiTags("Restaurant MenuSection")
@ApiParam({
  name: "restaurantId",
  required: true,
  description: "Unique identifier for restaurant.",
})
@UseGuards(AppAuthGuard)
@UseGuards(RestaurantOwnershipGuard)
export class MenuSectionController {
  constructor(private readonly menuSectionService: MenuSectionService) {}

  @Post()
  async createMenuSection(
    @Param("restaurantId") restaurantId: string,
    @Body() { menuSectionTitle }: CreateMenuSectionDto,
  ): Promise<SimpleResponse<MenuSection>> {
    return {
      success: true,
      data: await this.menuSectionService.createMenuSection(
        restaurantId,
        menuSectionTitle,
      ),
    };
  }
}
