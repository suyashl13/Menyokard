import { NestMiddleware } from "@nestjs/common";
import { Request } from "express";

export default class InjectUserMiddleware implements NestMiddleware {
  use(req: Request, res: any, next: (error?: Error | any) => void) {
    const session: any = req.session;
    req.user = session.user;
    next();
  }
}
