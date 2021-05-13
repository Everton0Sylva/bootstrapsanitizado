import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit, OnDestroy {
  constructor(private renderer: Renderer2) { }
  public options = {
    position: ["top", "right"],
    timeOut: 5000,
    preventDuplicates: true,
    theClass: 'outline primary',
    showProgressBar: false,
    animate: 'fromRight'
  }

  ngOnInit() {
    this.renderer.addClass(document.body, 'background');
    this.renderer.addClass(document.body, 'no-footer');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'background');
    this.renderer.removeClass(document.body, 'no-footer');
  }
}
