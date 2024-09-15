import { Controller, Get, Req, Res, Session, UseGuards } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AuthGuard } from "@nestjs/passport";
import { Request, Response } from "express";
import { WEB_APP_HOMEPAGE_URL } from "src/constants/admin-web-app.constants";
import { WEB_APP_HOMEPAGE_BASE_URL } from "src/constants/env.constants";

@Controller("auth")
export class AuthController {
  constructor(private readonly configService: ConfigService) {}

  @Get("google")
  @UseGuards(AuthGuard("google"))
  async googleAuth() {}

  @Get("google/callback")
  @UseGuards(AuthGuard("google"))
  googleAuthRedirect(
    @Req() req: Request,
    @Res() res: Response,
    @Session() session: any,
  ) {
    session.user = req.user;
    res.redirect(
      `${this.configService.get(WEB_APP_HOMEPAGE_BASE_URL)}${WEB_APP_HOMEPAGE_URL}`,
    );
  }
}
