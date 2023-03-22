import { AppService } from './app.service';
import { PingRequestResponse, PingRequestBody } from './dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    ping(pingRequstBody: PingRequestBody): Promise<PingRequestResponse>;
}
