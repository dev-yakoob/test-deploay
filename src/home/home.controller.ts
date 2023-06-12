import { Controller, Get } from '@nestjs/common';

@Controller('home')
export class HomeController {
  @Get()
  index() {
    return 'Hi The App is Running';
  }
}
