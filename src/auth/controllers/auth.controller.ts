import { Controller, Post, Request, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import { AuthService } from '../auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    login(@Request() req){
        console.log('sdfa')
        return this.authService.generateJWT(req.user);
        
    }
}

