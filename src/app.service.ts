import { Get, Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  hellowRamon():string{

    return "Oi,Ramon"

    
  }


}
