import { Component } from '@angular/core';
import { Child } from './child/child';

@Component({
  selector: 'app-lekcja9',
  imports: [Child],
  templateUrl: './lekcja9.html',
  styleUrl: './lekcja9.css'
})
export class Lekcja9 {
  items: string[] = [];

  addItem(item: string) {
    this.items.push(item);
  }
}