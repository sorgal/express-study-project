import {Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import {AuthGuard} from "@nestjs/passport";
import {JwtAuthGuard} from "./auth/jwt.auth.guard";
import {AuthService} from "./auth/auth.service";
const User = require('./models/user')


@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/token')
  getToken(userId: String): string {
    let user = User.findById(userId)
    return this.authService.createToken({ id: userId, email: user.email, firstName: user.firstName });
  }

  // @UseGuards(AuthGuard('local'))
  @UseGuards(JwtAuthGuard)
  @Post('/login')
  async login(@Request() req: any) {
    return req.user;
  }
}