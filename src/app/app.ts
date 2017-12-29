import { NgModule, ModuleWithProviders } from '@angular/core';
import { Base64Service } from './base64';
import { Base64LibService } from './base64-lib';

@NgModule({
    providers: [Base64Service, Base64LibService]
})
export class Base64Module { }
export { Base64Service } from './base64';
