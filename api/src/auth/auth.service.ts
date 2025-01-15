import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  register() {
    return {
      message: 'endpoint not implemented',
    };
  }

  login() {
    return {
      message: 'endpoint not implemented',
    };
  }
}
