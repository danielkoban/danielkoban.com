import { ChangeDetectionStrategy, Component, computed, HostListener, input, signal } from '@angular/core';
import { Asset } from 'contentful';
import { IconComponent } from '../common/icon/icon.component';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ImageSliderComponent {
  @HostListener('window:keydown', ['$event'])

  images = input<Asset[]>([]);

  current = signal(0);

  translateX = computed(() => `translateX(-${this.current() * 100}%)`);

  ngOnInit() {
    document.addEventListener('keydown', this.keydownHandler);
  }

  ngOnDestroy() {
    document.removeEventListener('keydown', this.keydownHandler);
  }

  next() {
    this.current.update(
      i => (i + 1) % this.images().length
    );
  }

  prev() {
    this.current.update(
      i => (i - 1 + this.images().length) % this.images().length
    );
  }

   private keydownHandler = (event: KeyboardEvent) => {
    const target = event.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
      return;
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.next();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.prev();
    }
  };

  // TODO: add proper typing
  setOrientation(details: any): string  {
    return details?.image?.height > details?.image?.width ? 'portrait' : 'landscape';
  }
}
