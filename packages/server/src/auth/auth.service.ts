import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async register(dto: AuthDto) {
    const { login, password } = dto;
    const foundUser = await this.prisma.userModel.findUnique({
      where: { login },
    });
    if (foundUser) {
      throw new BadRequestException('login already exist');
    }

    const hashedPassword = await this.hashPassword(password);
    await this.prisma.userModel.create({
      data: {
        login,
        hashedPassword,
      },
    });

    return { message: 'register was successful' };
  }
  async login() {
    return { message: 'login was successful' };
  }

  async signout() {
    return { message: 'signout' };
  }

  async hashPassword(password: string) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    return hashedPassword;
  }
}
