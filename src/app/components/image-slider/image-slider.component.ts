import { ChangeDetectionStrategy, Component, computed, HostListener, input, signal } from '@angular/core';
import { Asset } from 'contentful';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ImageSliderComponent {
  @HostListener('window:keydown', ['$event'])

  images = input<Asset[]>([]);

  current = signal(0);

  translateX = computed(() => `translateX(-${this.current() * 100}%)`);

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

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.next();
    }

    if (event.key === 'ArrowLeft') {
      this.prev();
    }
  }

  // TODO: add proper typing
  setOrientation(details: any): string  {
    return details?.image?.height > details?.image?.width ? 'portrait' : 'landscape';
  }
}
