import { Component, inject } from '@angular/core';
import { ContentfulService } from '../../../services/contentful.service';

@Component({
  selector: 'app-landscape',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private cs = inject(ContentfulService);

  posts = this.cs.posts;
  loading = this.cs.isLoading;
  error = this.cs.error;

  ngOnInit() {
    this.cs.getAllPosts();
  }
}
