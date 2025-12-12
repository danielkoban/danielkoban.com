import { EntrySkeletonType } from "contentful";

export interface PhotoPageFields {
  slug: string;
  images?: AssetImage[];
}

export interface AssetImage {
  sys: { id: string };
  fields: {
    title?: string;
    description?: string
    file: {
      url: string;
      fileName?: string;
      contentType?: string;
    };
  };
}

export type PhotoPageSkeleton = EntrySkeletonType<PhotoPageFields, "photoPage">;
