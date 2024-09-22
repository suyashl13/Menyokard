import { Test, TestingModule } from "@nestjs/testing";
import { RestaurantSlugController } from "./restaurant-slug.controller";

describe("RestaurantSlugController", () => {
  let controller: RestaurantSlugController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantSlugController],
    }).compile();

    controller = module.get<RestaurantSlugController>(RestaurantSlugController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
