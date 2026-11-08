import { Component } from '@angular/core';
import { Lekcja1 } from './lekcja1/lekcja1';
import { Lekcja2 } from './lekcja2/lekcja2';
import { Lekcja3 } from './lekcja3/lekcja3';
import { Lekcja4 } from './lekcja4/lekcja4';
import { Lekcja5 } from './lekcja5/lekcja5';
import { Lekcja6 } from './lekcja6/lekcja6';
import { Lekcja7 } from './lekcja7/lekcja7';
import { Lekcja8 } from './lekcja8/lekcja8';
import { Lekcja9 } from './lekcja9/lekcja9';

@Component({
  selector: 'app-root',
  imports: [Lekcja1, Lekcja2, Lekcja3, Lekcja4, Lekcja5, Lekcja6, Lekcja7, Lekcja8, Lekcja9],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}