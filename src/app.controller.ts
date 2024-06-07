import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { IPayloadRMQ } from './types/interface/IPayloadRmq.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('presence')
  getPayloadHandler(@Payload() data: IPayloadRMQ): Promise<any> {
    return this.appService.getPayload(data);
  }
}
