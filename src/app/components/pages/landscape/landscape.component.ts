import { Component, computed, inject } from '@angular/core';
import { ContentfulService } from '../../../services/contentful.service';
import { ImageSliderComponent } from '../../image-slider/image-slider.component';
import { Asset } from 'contentful';
// import { AssetImage } from '../../../interfaces/photo-page.model';

@Component({
  selector: 'app-landscape',
  templateUrl: './landscape.component.html',
  styleUrl: './landscape.component.scss',
  imports: [ImageSliderComponent]
})
export class LandscapeComponent {
  private cs = inject(ContentfulService);

  post = this.cs.post;
  loading = this.cs.isLoading;
  error = this.cs.error;

  images = computed(() => {
    const images = this.post()?.fields.images;
    return (images as unknown as Asset[]) ?? [];
  });

  ngOnInit(): void {
    this.cs.getPostBySlug('landscape');
  }
}
