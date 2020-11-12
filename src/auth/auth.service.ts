import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

  async checkAuth(password: string): Promise<boolean> {
    return await password === 'gsacf1111' ? true : false;
  }

}
