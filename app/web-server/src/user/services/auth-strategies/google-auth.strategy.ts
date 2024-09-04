import { Injectable, Logger, LoggerService } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { Strategy, VerifyCallback } from 'passport-google-oauth2';
import {
    GOOGLE_CALLBACK_URL,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET
} from "src/constants/env.constants";

import User from "src/user/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor(
        private readonly configService: ConfigService,
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        private readonly loggerService: Logger,
    ) {
        super({
            clientID: configService.get(GOOGLE_CLIENT_ID),
            clientSecret: configService.get(GOOGLE_CLIENT_SECRET),
            callbackURL: configService.get(GOOGLE_CALLBACK_URL),
            scope: ['profile', 'email'],
        });
    }


    async validate(
        _accessToken: string,
        _refreshToken: string,
        profile: any,
        done: VerifyCallback,
    ): Promise<any> {
        const { id, name, emails, photos } = profile;
        const user = {
            provider: 'google',
            providerId: id,
            email: emails[0].value,
            name: `${name.givenName} ${name.familyName}`,
            picture: photos[0].value,
        };
        done(null, user);
    }
}

export default GoogleStrategy;