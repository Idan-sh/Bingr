import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ description: 'Username', example: 'username123' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: 'User email address',
    example: 'user@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'User password', example: 'strongpassword123' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
