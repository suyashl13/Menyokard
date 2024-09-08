import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";

@Injectable()
export default class InjectUserMiddleware implements NestMiddleware {

    constructor() {}

  use(req: Request, res: Response, next: (error?: Error | any) => void) {
    const user = req.session.user;
  }
}