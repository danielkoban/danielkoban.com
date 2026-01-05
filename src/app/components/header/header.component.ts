import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type LinkType = {
  url: string,
  label: string,
  ariaLabel: string
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [RouterLink, RouterLinkActive]
})

export class HeaderComponent {
  links: LinkType[] = [
    { url: '/street-in-color', label: 'Street in color', ariaLabel: 'See my color street photography' },
    { url: '/lifestyle', label: 'Lifestyle', ariaLabel: 'Go to Lifestyle page' },
    { url: '/about', label: 'About', ariaLabel: 'Read about me' }
  ]
  isOpen = signal<boolean>(false);

  toggleMenu() {
    this.isOpen.update(open => !open);
  }
}
