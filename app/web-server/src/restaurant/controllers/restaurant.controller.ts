import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { RestaurantService } from "../services/restaurant.service";
import { ApiTags } from "@nestjs/swagger";
import { CurrentUser } from "src/user/decorators/user.decorator";
import { ApplicationUser } from "src/common/interfaces/application-user.interface";
import { AppAuthGuard } from "src/user/guards/app-auth.guard";
import SimpleResponse from "src/common/interfaces/simple-response.interface";
import Restaurant from "../entities/restaurant.entity";
import CreateRestaurantDto from "../dtos/create-restaurant.dto";

@UseGuards(AppAuthGuard)
@ApiTags("Restaurant")
@Controller()
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  async getRestaurantsByUserId(
    @CurrentUser() user: ApplicationUser,
  ): Promise<SimpleResponse<Restaurant[]>> {
    return {
      success: true,
      data: await this.restaurantService.getRestaurantsByUserId(user.userId),
    };
  }

  @Post()
  async createRestaurantForUser(
    @CurrentUser() user: ApplicationUser,
    @Body() restaurantDetails: CreateRestaurantDto,
  ): Promise<SimpleResponse<Restaurant>> {
    const restaurant: Restaurant =
      await this.restaurantService.createRestaurantForUser({
        ...restaurantDetails,
        userId: user.userId,
      });

    return {
      success: true,
      data: restaurant,
    };
  }
}
