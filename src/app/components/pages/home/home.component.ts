import { Component, inject } from '@angular/core';
import { ContentfulService } from '../../../services/contentful.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [RouterLink]
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
