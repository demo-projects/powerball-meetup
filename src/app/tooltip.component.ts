import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <p>{{msg}}</p>
  `,
  styles: []
})
export class TooltipComponent  {
  public msg: string = "MSG";
}
