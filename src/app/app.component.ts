import { Component, HostListener } from '@angular/core';
import { testDecorator } from './testDecorator';
import { Partial, throttle, debounce } from 'lodash-decorators';
import { NgLog } from './NgLog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
@testDecorator({ name: 'ghoul' })
@NgLog()
export class AppComponent {
  title = 'app';
  c: number;
  constructor() {
    console.log('test', this['name']());
                 console.log('==>', this.getResult());
  }

  ngOnInit() {
    let b = 22;
    this.c = 5;
    console.log(b);
  }
  sayHello(name) {
    return 'hello ' + name;
  }
  @Partial('sayHello', 'ghoul')
  getResult() {}

  @HostListener('document:scroll')
  @throttle()
  @debounce(500)
  scroll() {
    console.log('scroll');
  }
}
