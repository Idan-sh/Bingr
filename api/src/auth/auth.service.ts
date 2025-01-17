import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  register(dto: RegisterDto) {
    return {
      message: 'endpoint not implemented',
    };
  }

  login(dto: LoginDto) {
    return {
      message: 'endpoint not implemented',
    };
  }
}
