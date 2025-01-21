import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { ApiUriTooLongResponse } from '@nestjs/swagger';

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

  async login(dto: LoginDto) {
    // find user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    // if user doesn't exist throw exception
    if (!user) throw new ForbiddenException(`Email doesn't exist`);

    // compare passwords
    const pwMatch = await argon.verify(user.password_hash, dto.password);

    // if password is incorrect, throw exception
    if (!pwMatch) throw new ForbiddenException('Password incorrect');

    // Transform user object to exclude password_hash field
    const { password_hash, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }
}
