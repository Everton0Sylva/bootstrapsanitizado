import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'king-b-separator',
  templateUrl: './king-b-separator.component.html'
})
export class KingBSeparatorComponent implements OnInit {

  @Input()
  kingBSeparator: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
