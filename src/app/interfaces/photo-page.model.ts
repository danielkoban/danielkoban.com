import { Asset, EntrySkeletonType } from "contentful";

export interface PhotoPageFields {
  slug: string;
  images?: Asset[];
}

export type PhotoPageSkeleton = EntrySkeletonType<PhotoPageFields, "photoPage">;

export interface AboutPageFields {
  slug: string;
  title?: string;
  description: string;
  images?: Asset[];
}

export type AboutPageSkeleton = EntrySkeletonType<AboutPageFields, "aboutPage">;

