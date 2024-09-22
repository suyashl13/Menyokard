import { Test, TestingModule } from "@nestjs/testing";
import { MenuSectionSlugController } from "../../controllers/menu-section-slug.controller";

describe("MenuSectionSlugController", () => {
  let controller: MenuSectionSlugController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuSectionSlugController],
    }).compile();

    controller = module.get<MenuSectionSlugController>(
      MenuSectionSlugController,
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
