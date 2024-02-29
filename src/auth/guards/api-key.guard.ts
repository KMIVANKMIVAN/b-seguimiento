import { CanActivate, ExecutionContext, Injectable,UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import {JwtService} from '@nestjs/jwt'

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request=context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeader(request);
  
  if (!token) {
    throw new UnauthorizedException("dfas");
  }
  try {
    const payload = this.jwtService.verifyAsync(
      token,
      {
        secret: 'key'
      }
    );
    
    request['user'] = payload;
  } catch {
    throw new UnauthorizedException();
  }
  return true;
}

private extractTokenFromHeader(request: Request): string | undefined {
  const [type, token] = request.headers.authorization?.split(' ') ?? [];
  return type === 'Bearer' ? token : undefined;
}
}
