import { Controller, Param, Patch, UseGuards } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { AppAuthGuard } from "src/user/guards/app-auth.guard";
import RestaurantOwnershipGuard from "../guards/restaurant-ownership.guard";

@Controller(":restaurantId/menu/section/:sectionId")
@UseGuards(AppAuthGuard)
@UseGuards(RestaurantOwnershipGuard)
@ApiTags("Restaurant Menu Section Slug")
@ApiParam({
  name: "restaurantId",
  required: true,
  description: "Unique identifier for restaurant.",
})
@ApiParam({
  name: "sectionId",
  required: true,
  description: "Unique identifier for sectionId.",
})
export class MenuSectionSlugController {
  @Patch()
  getSectionSlug(
    @Param("restaurantId") restaurantId: string,
    @Param("sectionId") sectionId: string,
  ) {
    return {
      restaurantId,
      sectionId,
    };
  }
}
