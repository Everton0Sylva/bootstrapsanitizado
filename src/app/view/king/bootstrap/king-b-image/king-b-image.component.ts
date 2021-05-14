import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-king-b-image',
  templateUrl: './king-b-image.component.html',
  styleUrls: ['./king-b-image.component.scss']
})
export class KingBImageComponent implements OnInit {
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

  @Input()
  multiple: boolean;

  @Output()
  imageEvent = new EventEmitter<any>();

  public isInvalidField: boolean = false


  constructor() { }
  public files = Array<Image>();


  ngOnInit() {
    document.body.addEventListener('onblur', (event) => {
      console.log('dialog was canceled');
    });
  }

  onUploadImage(event: any) {
    let self = this;
    var eFiles = event.target.files;
    let mLenght = eFiles.length;
    if (eFiles.length > 0) {
      self.onFocus();
      for (let i = 0; i < mLenght; i++) {
        let file: File = eFiles[i];
        const myReader: FileReader = new FileReader();
        myReader.onloadend = (loadEvent: any) => {
          let currentfile = new Image();
          let img = loadEvent.target.result;
          currentfile.name = file.name;
          currentfile.mimeType = img.split(';')[0].replace('data:', '');
          currentfile.base64 = img.split(';')[1].replace('base64,', '');
          self.files.push(currentfile);
        };
        myReader.readAsDataURL(file);
      };
    } else {
      self.onBlur()
    }
  }

  onbtnUpload() {
    let input: any = document.getElementById('onUploadImage');
    input.click();
    // debugger
  }

  onFocus() {
    this.isInvalidField = false;
  }

  onBlur() {
    if (this.files.length > 0) {
      this.isInvalidField = false;
    } else {
      this.isInvalidField = true;
    }
  }

  change() {
    this.form.controls[this.name].status = 'VALID'
    this.imageEvent.emit(this.files);
  }
}
export class Image {
  name: string;
  mimeType: string;
  base64: string;
  constructor() {
  }
}
