import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
} from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { RestaurantService } from "../services/restaurant.service";
import RestaurantOwnershipGuard from "../guards/restaurant-ownership.guard";

@Controller(":restaurantId")
@ApiTags("Restaurant Slug")
@ApiParam({
  name: "restaurantId",
  required: true,
  description: "Unique identifier for restaurant.",
})
@UseGuards(RestaurantOwnershipGuard)
export class RestaurantSlugController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  async getRestaurantSlug(@Param("restaurantId") restaurantId: string) {
    return await this.restaurantService.getRestaurantDetailsById(restaurantId);
  }

  @Delete()
  deleteRestaurantSlug(@Param("restaurantId") restaurantId: string) {}

  @Patch()
  updateRestaurantSlug(@Param("restaurantId") restaurantId: string) {}
}
