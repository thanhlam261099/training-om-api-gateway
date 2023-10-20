import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { LoginDto, RegisterDto } from './dto/LoginDto';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER-SERVICE') private userClient: ClientProxy,
    @Inject('MAILING-SERVICE') private mailingClient: ClientProxy,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  login(loginDto: LoginDto) {
    return this.userClient.send('login', loginDto);
  }

  register(registerDto: RegisterDto) {
    const user = this.userClient.send('register', registerDto);
    this.mailingClient.send('send-mail', registerDto);
    return user;
  }
}
