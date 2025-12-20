import { Asset, EntrySkeletonType } from "contentful";

export interface PhotoPageFields {
  slug: string;
  images?: Asset[];
}

export type PhotoPageSkeleton = EntrySkeletonType<PhotoPageFields, "photoPage">;
