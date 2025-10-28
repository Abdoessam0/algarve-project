export type ContentSource = {
  name: string;
  url: string;
};

export type ReviewInfo = {
  reviewedBy?: string;
  verifiedAt?: string;
};

export type Provenance = {
  sources: ContentSource[];
  review?: ReviewInfo;
  isAIGenerated?: boolean;
};

// TODO(scraping): fill provenance and require review before publish.
