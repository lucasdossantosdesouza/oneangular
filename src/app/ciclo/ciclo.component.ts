import { Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit
, AfterContentChecked, AfterViewInit, AfterViewChecked, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit
, AfterContentChecked, AfterViewInit, AfterViewChecked {

 @Input() valorInicial: number = 10;
  constructor () {
    this.log('construtor');
  }

  ngOnChanges () {
    this.log('ngOnChanges');
  }
  ngOnInit () {
    this.log('ngOnInit');
  }
  ngDoCheck () {
    this.log('ngDoCheck');
  }
  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngAfterContentInit () {
    this.log('ngAfterContentInit');
  }
  ngOnDestroy () {
    this.log('ngOnDestroy');
  }

  private log(hook: String) {
    console.log(hook);
  }


}
