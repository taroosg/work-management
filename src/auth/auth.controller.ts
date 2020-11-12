import {
  Controller,
  Post,
  Body,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDTO } from './auth.dto';

@Controller('auth')
export class AuthController {

  constructor(private readonly service: AuthService) { }

  @Post()
  async checkAuth(@Body() password: AuthDTO): Promise<boolean> {
    return await this.service.checkAuth(password.password);
  }

}
