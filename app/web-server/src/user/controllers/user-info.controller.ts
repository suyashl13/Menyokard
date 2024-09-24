import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("UserInfo")
@Controller("user-info")
export class UserInfoController {}
