import { Test, TestingModule } from "@nestjs/testing";
import { MenuSectionSlugMenuItemSlugController } from "../../controllers/menu-section-slug-menu-item-slug.controller";

describe("MenuSectionSlugMenuItemSlugController", () => {
  let controller: MenuSectionSlugMenuItemSlugController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuSectionSlugMenuItemSlugController],
    }).compile();

    controller = module.get<MenuSectionSlugMenuItemSlugController>(
      MenuSectionSlugMenuItemSlugController,
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
