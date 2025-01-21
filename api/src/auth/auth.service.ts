import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(dto: RegisterDto) {
    // generate password hash)
    const hash = await argon.hash(dto.password);

    try {
      // save new user in db
      const user = await this.prisma.user.create({
        data: {
          username: dto.username,
          email: dto.email,
          password_hash: hash,
        },
      });

      // Transform user object to exclude password_hash field
      const { password_hash, ...userWithoutPassword } = user;

      // return the saved user
      return userWithoutPassword;
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ForbiddenException('Credentials taken');
      }
    }
  }

  login(dto: LoginDto) {
    return {
      message: 'endpoint not implemented',
    };
  }
}
