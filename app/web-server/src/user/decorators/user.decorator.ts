import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";
import { ApplicationUser } from "../../common/interfaces/application-user.interface";

export const CurrentUser = createParamDecorator(
  (data: any, context: ExecutionContext): ApplicationUser | null => {
    const request: Request = context.switchToHttp().getRequest();
    const session: any = request.session;

    return session.user || null;
  },
);
