import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {

  private isOpened: boolean = false;

  @HostListener('click') click(){
    this.isOpened = true;
  }

  @HostListener('mouseleave') dropdown(){
    this.isOpened = false;
  }

  @HostBinding("class.open") get set() {
    return this.isOpened;
  }

  constructor() { }
}
