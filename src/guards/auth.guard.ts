import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const token = request.headers.authorization?.split(' ')?.[1];
      if (!token) {
        throw new UnauthorizedException();
      }
      const payload = await this.jwtService.verify(token, {
        publicKey: this.configService.get('JWT_ACCESS_SECRET'),
      });
      request['user'] = payload;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
    return true;
  }
}
