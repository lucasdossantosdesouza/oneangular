import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input()set ngElse(condition: Boolean) {
    if (!condition) {
      this._viewContainerRef.createEmbeddedView(this._templateref);
    } else {
      this._viewContainerRef.clear();
    }
  }
  constructor(private _templateref: TemplateRef<any> , private _viewContainerRef: ViewContainerRef) {

  }

}
