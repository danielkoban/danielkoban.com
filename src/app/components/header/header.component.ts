import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isOpen = signal<boolean>(false);

  toggleMenu() {
    this.isOpen.update(open => !open);
  }
}
