import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';
import {isActive} from '@angular/router';

@Component({
  selector: 'app-directives',
  imports: [
    NgIf,
    NgForOf,
    NgClass,
    NgStyle
  ],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})

export class Directives {
isVisible=true;
isActive=false;
toggle1(){
  this.isActive= !this.isActive;
  }
  toggle(){
    this.isVisible= !this.isVisible;

  }
  items=['angular','laravel','python']

  color ='blue';
  changeColor(){
    this.color=this.color === 'blue'?'red':'green';
}
}
