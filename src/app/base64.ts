import { Injectable } from '@angular/core';
import { Base64LibService } from './base64-lib';
@Injectable()
export class Base64Service {
    time: any = new Date().getTime();
    constructor(
        public base64: Base64LibService
    ) {
        console.log('base64 service', this.time);
    }

    encode(s: string): string {
        return this.base64.encode(s);
    }
}