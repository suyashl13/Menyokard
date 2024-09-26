import {
  Body,
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
import SimpleResponse from "src/common/interfaces/simple-response.interface";
import Restaurant from "../entities/restaurant.entity";
import UpdateRestaurantDto from "../dtos/update-restaurant.dto";
import { AppAuthGuard } from "src/user/guards/app-auth.guard";

@Controller(":restaurantId")
@ApiTags("Restaurant Slug")
@ApiParam({
  name: "restaurantId",
  required: true,
  description: "Unique identifier for restaurant.",
})
@UseGuards(AppAuthGuard)
@UseGuards(RestaurantOwnershipGuard)
export class RestaurantSlugController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  async getRestaurantSlug(
    @Param("restaurantId") restaurantId: string,
  ): Promise<SimpleResponse<Restaurant>> {
    return {
      success: true,
      data: await this.restaurantService.getRestaurantDetailsById(restaurantId),
    };
  }

  @Delete()
  async deleteRestaurantSlug(
    @Param("restaurantId") restaurantId: string,
  ): Promise<SimpleResponse<Restaurant>> {
    return {
      success: true,
      data: await this.restaurantService.deleteRestaurant(restaurantId),
    };
  }

  @Patch()
  async updateRestaurantSlug(
    @Param("restaurantId") restaurantId: string,
    @Body() restaurantUpdateBody: UpdateRestaurantDto,
  ): Promise<SimpleResponse<Restaurant>> {
    return {
      success: true,
      data: await this.restaurantService.updateRestaurant(
        restaurantId,
        restaurantUpdateBody,
      ),
    };
  }
}
