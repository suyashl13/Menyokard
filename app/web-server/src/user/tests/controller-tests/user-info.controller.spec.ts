import { Test, TestingModule } from "@nestjs/testing";
import { UserInfoController } from "../../controllers/user-info.controller";

describe("UserInfoControllerController", () => {
  let controller: UserInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserInfoController],
    }).compile();

    controller = module.get<UserInfoController>(UserInfoController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
