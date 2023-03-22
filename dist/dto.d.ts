export declare class PingRequestResponse {
    echo: {
        args: {
            message: string;
        };
        headers: {
            'x-forwarded-proto': string;
            'x-forwarded-port': string;
            host: string;
            'x-amzn-trace-id': string;
            accept: string;
            'user-agent': string;
            'accept-encoding': string;
        };
        url: string;
    };
    timestamp: number;
    env: string;
    version: string;
}
export declare class PingRequestBody {
    message: string;
}
