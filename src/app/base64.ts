import { Injectable } from '@angular/core';
import { Base64 } from 'js-base64';
@Injectable()
export class Base64Service {
    time:any = new Date().getTime();
    constructor() { 
        console.log('base64 service',this.time);
    }

    encode(s: string, uriSafe?: boolean): string {
        return Base64.encode(s, uriSafe);
    }

    encodeURI(s: string): string {
        return Base64.encodeURI(s);
    }

    decode(base64: string): string {
        return Base64.decode(base64);
    }

    atob(base64: string): string {
        return Base64.atob(base64);
    }

    btoa(s: string): string {
        return Base64.btoa(s);
    }

    fromBase64(base64: string): string {
        return Base64.fromBase64(base64);
    }

    toBase64(s: string, uriSafe?: boolean): string {
        return Base64.toBase64(s, uriSafe);
    }

    btou(s: string): string {
        return Base64.btou(s);
    }

    utob(s: string): string {
        return Base64.utob(s);
    }

    noConflict() {
        return Base64.noConflict();
    }

    extendString(): void {
        return Base64.extendString();
    }
}