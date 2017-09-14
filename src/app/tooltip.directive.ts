import {Directive, ViewContainerRef, ComponentFactoryResolver, HostListener, Input, NgModuleRef} from '@angular/core';
import {TooltipComponent} from './tooltip.component';
import {AppModule} from './app.module';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  constructor(private entry: ViewContainerRef,
              private appModule: NgModuleRef<AppModule>) {}

  @Input() appTooltip: string;

  @HostListener('mouseover')
  showTooltip() {
      const f = this.appModule.componentFactoryResolver.resolveComponentFactory(TooltipComponent);
    const fi = this.entry.createComponent(f);

    fi.instance.msg = this.appTooltip;
  }

  @HostListener('mouseleave')
  clear() {
    this.entry.clear();
  }


}
