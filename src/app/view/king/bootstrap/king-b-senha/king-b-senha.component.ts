import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-king-b-senha',
  templateUrl: './king-b-senha.component.html',
  styleUrls: ['./king-b-senha.component.scss']
})
export class KingBSenhaComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  label: string;

  @Input()
  error: string;

  @Input()
  form: any;

  @Input()
  prefix: string;

  @Input()
  icon: string;

  @Output()
  passwdEvent = new EventEmitter<any>();


  constructor() { }

  public showPasswd: boolean = true;

  public pwType: string;

  public isInvalidField: boolean = false

  onFocus(){
    this.isInvalidField = false;
  }

  onBlur() {
    let t = this.form.controls[this.name].status    
    if (t.indexOf('INVA') >= 0) {
      this.isInvalidField = true;
    } else {
      this.isInvalidField = false;
    }
  }

  ngOnInit() {
    this.onShowPassword()
  }

  onShowPassword() {
    this.showPasswd = !this.showPasswd
    if (this.showPasswd == true) {
      this.pwType = 'text';
    } else {
      this.pwType = 'password'
    }
  }


  change(event: any) {
    this.passwdEvent.emit(event.target.value);
  }
}
