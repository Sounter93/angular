import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-lekcja7',
  styleUrl: './lekcja7.css',
  templateUrl: './lekcja7.html',
})
export class Lekcja7 {
  message = '';

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
}
