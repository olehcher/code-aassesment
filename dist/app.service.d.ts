import { ConfigService } from '@nestjs/config';
import { PingRequestResponse } from './dto';
export declare class AppService {
    private configService;
    constructor(configService: ConfigService);
    ping(message: string): Promise<PingRequestResponse>;
}
