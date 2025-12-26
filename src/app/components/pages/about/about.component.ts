import { Component, computed, inject } from '@angular/core';
import { ContentfulService } from '../../../services/contentful.service';
import { Asset } from 'contentful';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  private cs = inject(ContentfulService);

  page = this.cs.page;
  loading = this.cs.isLoading;
  error = this.cs.error;

  images = computed(() => {
    const images = this.page()?.fields.images;
    return (images as unknown as Asset[]) ?? [];
  });

  ngOnInit(): void {
    this.cs.getAboutPage();
  }
}
