import { Module } from '@nestjs/common';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule} from '@nestjs/passport';

@Module({
  imports: [
    ConfigModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (cfg: ConfigService): JwtModuleOptions => {
        const secret = cfg.get<string>('JWT_SECRET');
        if (!secret) throw new Error('JWT_SECRET is not set');

        const raw = cfg.get<string>('JWT_EXPIRES_IN') ?? '86400';
        const expiresIn = parseInt(raw, 10);

        if (Number.isNaN(expiresIn) || expiresIn <= 0) {
          throw new Error(
            `JWT_EXPIRES_IN must be a positive number of seconds (got: "${raw}")`,
          );
        }

        return {
          secret,
          signOptions: { expiresIn },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
