import { Component } from '@angular/core';
import { IconComponent } from '../common/icon/icon.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [IconComponent]
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  constructor() {}
}
