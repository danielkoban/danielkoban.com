import { Injectable, signal, Signal } from "@angular/core";
import { createClient, Entry } from "contentful";
import { AboutPageSkeleton, PhotoPageSkeleton } from "../interfaces/photo-page.model";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class ContentfulService {
  private client = createClient({
    space: `${environment.contentfulSpaceId}`,
    accessToken: `${environment.contentfulAccessKey}`,
  });

  private pageSignal = signal<Entry<AboutPageSkeleton> | null>(null);
  private postSignal = signal<Entry<PhotoPageSkeleton> | null>(null);
  private postsSignal = signal<Entry<PhotoPageSkeleton>[]>([]);

  private loadingSignal = signal<boolean>(false);
  private errorSignal = signal<string | null>(null);

  page = this.pageSignal.asReadonly();
  post = this.postSignal.asReadonly();
  posts = this.postsSignal.asReadonly();
  isLoading = this.loadingSignal.asReadonly();
  error = this.errorSignal.asReadonly();

  getPostBySlug(slug: string): Signal<Entry<PhotoPageSkeleton> | null> {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.client
      .getEntries<PhotoPageSkeleton>({
        content_type: "photoPage",
        "fields.slug": slug,
        limit: 1,
      } as any)
      .then((res) => {
        this.postSignal.set(res.items[0] ?? null);
      })
      .catch((err) => {
        console.error("Error fetching post:", err);
        this.errorSignal.set("Failed to load post");
        this.postSignal.set(null);
      })
      .finally(() => this.loadingSignal.set(false));
    return this.post;
  }

  getAllPosts(): Signal<Entry<PhotoPageSkeleton>[]> {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    this.client
      .getEntries<PhotoPageSkeleton>({
        content_type: "photoPage",
      })
      .then((res) => {
        this.postsSignal.set(res.items);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        this.errorSignal.set("Failed to fetch posts");
        this.postsSignal.set([]);
      })
      .finally(() => this.loadingSignal.set(false));

    return this.posts;
  }

  getAboutPage(): Signal<Entry<AboutPageSkeleton> | null> {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.client
      .getEntries<AboutPageSkeleton>({
        content_type: "aboutPage",
        "fields.slug": "about",
        limit: 1,
      } as any)
      .then((res) => {
        this.pageSignal.set(res.items[0] ?? null);
      })
      .catch((err) => {
        console.error("Error fetching page:", err);
        this.errorSignal.set("Failed to load page");
        this.pageSignal.set(null);
      })
      .finally(() => this.loadingSignal.set(false));
    return this.page;
  }
}
