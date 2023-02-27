import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: AuthDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  async login(@Body() dto: AuthDto, @Req() req, @Res() res) {
    console.log('est');
    return this.authService.login(dto, req, res);
  }

  @Get('signout')
  async signout(@Req() req, @Res() res) {
    return this.authService.signout(req, res);
  }
}
