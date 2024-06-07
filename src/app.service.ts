import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { IPayloadRMQ } from './types/interface/IPayloadRmq.interface';
import { EDevice } from './types/enum/EDevice.enum';

@Injectable()
export class AppService {
  async getPayload(payload: IPayloadRMQ): Promise<void> {
    try {
      console.log(payload);

      if (payload.type === EDevice.RFID) {
        if (!payload.imageUrl) {
          console.log('Absensi RFID Biasa');
          return;
        }
        console.log('Absensi RFID CAM');
        return;
      }

      if (payload.type === EDevice.DAILY_REPORT) {
        console.log('Absensi Daily Report');
        return;
      }
    } catch (error) {
      if (error instanceof InternalServerErrorException)
        throw new InternalServerErrorException(error);
    }
  }
}
