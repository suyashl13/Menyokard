import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { RestaurantService } from "../services/restaurant.service";
import { Request } from "express";

@Injectable()
export default class RestaurantOwnershipGuard implements CanActivate {
  constructor(private readonly restaurantService: RestaurantService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const { restaurantId } = request.params;
    return await this.restaurantService.checkRestaurantOwnership(
      request.user.userId,
      restaurantId,
    );
  }
}
