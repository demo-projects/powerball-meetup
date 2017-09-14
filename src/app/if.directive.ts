import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  @Input() appIfElse: TemplateRef<any>;
  @Input() appIfThen: TemplateRef<any>;

  constructor(private entry: ViewContainerRef) {}

  @Input()
  set appIf(flag: boolean) {
    if (flag) {
      this.entry.createEmbeddedView(this.appIfThen);
    } else {
      this.entry.createEmbeddedView(this.appIfElse);
    }
  }

}
