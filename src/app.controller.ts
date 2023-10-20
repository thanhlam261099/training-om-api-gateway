import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginDto, RegisterDto } from './dto/LoginDto';

@Controller('auth')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/login')
  Login(@Body() loginDto: LoginDto) {
    return this.appService.login(loginDto);
  }

  @Post('/register')
  Register(@Body() registerDto: RegisterDto) {
    console.log('gateway');
    return this.appService.register(registerDto);
  }
}
