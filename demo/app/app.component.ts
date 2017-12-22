import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Base64Service } from '../../src/app/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'app';
  result: string = '';
  source: string = '';
  constructor(
    public base64: Base64Service
  ) { }
  ngOnInit() { }

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
