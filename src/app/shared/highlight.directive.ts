import { Directive , HostListener, ElementRef, Renderer, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  private backgroundColor: String;
  @Input('appHighlight') defaultColor: String = 'white';
  @Input() highlight: String = 'yellow';

  @HostListener( 'mouseenter') onMouseOver() {
    /*this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');*/
    this.backgroundColor = this.highlight;
  }
  @HostListener( 'mouseleave') onMouseLeave() {
    /*this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'white');*/
    this.backgroundColor = this.defaultColor;
  }

  // tslint:disable-next-line:member-ordering
  /*@HostBinding('style.backgroundColor') backgroundColor: String;*/

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
