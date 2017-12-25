import { NgModule, ModuleWithProviders } from '@angular/core';
import { Base64Service } from './base64';
@NgModule({
    providers: [Base64Service]
})
export class Base64Module {}
export { Base64Service } from './base64';
