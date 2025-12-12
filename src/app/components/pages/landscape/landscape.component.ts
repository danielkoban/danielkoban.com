import { Component, inject } from '@angular/core';
import { ContentfulService } from '../../../services/contentful.service';

@Component({
  selector: 'app-landscape',
  templateUrl: './landscape.component.html',
  styleUrl: './landscape.component.scss'
})
export class LandscapeComponent {
  private cs = inject(ContentfulService);

  post = this.cs.post;
  loading = this.cs.isLoading;
  error = this.cs.error;

  ngOnInit() {
    this.cs.getPostBySlug('landscape');
  }
}
