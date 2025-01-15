import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    register(){
        return {
            message : "endpoint not implemented",
        };
    }

    @Post('login')
    login(){
        return{
            message : "endpoint not implemented",
        };
    }
}
