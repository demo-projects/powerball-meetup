import {Component, ViewContainerRef, ComponentFactoryResolver, ViewChild, ElementRef} from '@angular/core';
import {TooltipComponent} from './tooltip.component';

@Component({
  selector: 'app-root',
  template: `
    <h1 appTooltip="Hi im a tooltip">Welcome to Application!!</h1>
  `
})
export class AppComponent {

}
