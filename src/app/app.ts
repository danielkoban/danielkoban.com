import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicPageComponent } from './templates/basic-page.component';

@Component({
  selector: 'app-root',
  imports: [BasicPageComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
