import { Injectable } from '@angular/core';
import { Base64 } from 'js-base64';
@Injectable()
export class Base64Service {
    constructor() { }
    encode(str: string): string {
        return Base64.encode(str);
    }
}