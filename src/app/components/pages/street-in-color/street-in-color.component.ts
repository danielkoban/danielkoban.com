import { Component, computed, inject } from '@angular/core';
import { ContentfulService } from '../../../services/contentful.service';
import { ImageSliderComponent } from '../../image-slider/image-slider.component';
import { Asset } from 'contentful';

@Component({
  selector: 'app-street-in-color',
  templateUrl: './street-in-color.component.html',
  styleUrl: './street-in-color.component.scss',
  imports: [ImageSliderComponent]
})
export class StreetInColorComponent {
  private cs = inject(ContentfulService);

  post = this.cs.post;
  loading = this.cs.isLoading;
  error = this.cs.error;

  images = computed(() => {
    const images = this.post()?.fields.images;
    return (images as unknown as Asset[]) ?? [];
  });

  ngOnInit(): void {
    this.cs.getPostBySlug('street-in-color');
  }
}
