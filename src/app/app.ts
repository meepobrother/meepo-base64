import { NgModule, ModuleWithProviders } from '@angular/core';
import { Base64Service } from './base64';
@NgModule({})
export class Base64Module {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: Base64Module,
            providers: [Base64Service]
        }
    }
}
export { Base64Service } from './base64';
