# [js-base64](https://github.com/dankogai/js-base64) 

- 安装

```sh
yarn add meepo-base64
```

- 引入

```ts
import { Base64Module } from '../../src/app/app';
@NgModule({
  imports: [
    Base64Module.forRoot()
  ]
})
export class AppModule { }
```

- 使用

```ts
import { Base64Service } from 'meepo-base64';

export class AppComponent  {
  result: string = '';
  source: string = '';
  constructor(
    public base64: Base64Service
  ) { }

  encode() {
    this.result = this.base64.encode(this.source);
  }

  decode() {
    this.result = this.base64.decode(this.source);
  }

  encodeURI() {
    this.result = this.base64.encodeURI(this.source);
  }

  atob() {
    this.result = this.base64.atob(this.source);
  }

  btoa() {
    this.result = this.base64.btoa(this.source);
  }

  fromBase64() {
    this.result = this.base64.fromBase64(this.source);
  }

  toBase64() {
    this.result = this.base64.toBase64(this.source);
  }

  btou() {
    this.result = this.base64.btou(this.source);
  }

  utob() {
    this.result = this.base64.utob(this.source);
  }
}
```