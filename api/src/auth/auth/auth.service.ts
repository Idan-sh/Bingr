import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    register(){
        return {
            message : "endpoint not implemented",
        };
    }

    login(){
        return{
            message : "endpoint not implemented",
        };
    }
}
