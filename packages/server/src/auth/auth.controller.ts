import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  @Post('register')
  async register(@Body() dto: AuthDto) {}

  @Post('login')
  async login(@Body() dto: AuthDto) {}
}
