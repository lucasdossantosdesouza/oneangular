import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {
  private backgroundColor: String;
  @HostListener( 'mouseenter') onMouseOver() {
    /*this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');*/
    this.backgroundColor = 'yellow';
  }
  @HostListener( 'mouseleave') onMouseLeave() {
    /*this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'white');*/
    this.backgroundColor = 'white';
  }

  // tslint:disable-next-line:member-ordering
  /*@HostBinding('style.backgroundColor') backgroundColor: String;*/

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }


  constructor(private _elementRef: ElementRef, private _renderer: Renderer) { }

}
