/*
Mandra é um projeto de automatização de software
Author : Gleison de souza luiz
Contato:gleisonnanet@gmail.com
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Gen01ScreemService {
 
 constructor() { }
  changetable(): string{
    localStorage.setItem('screem', '0')
    return localStorage.getItem('screem');
  }
  changeform(): string{
      localStorage.setItem('screem', '1')
      return localStorage.getItem('screem');
  }
  getscreem(){
    return localStorage.getItem('screem');
  }

  setform(data){
    return localStorage.setItem('form', JSON.stringify(data));
  }

  getform(){
    return JSON.parse(localStorage.getItem('form'));
  }
  
}

 
