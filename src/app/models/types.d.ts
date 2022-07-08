export interface WikiDoc {
  pages: Page[];
}

export interface Page {
  id:            number;
  key:           string;
  title:         string;
  excerpt:       string;
  matched_title: null;
  description:   string;
  thumbnail:     Thumbnail | null;
}

export interface Thumbnail {
  mimetype: string;
  size:     number | null;
  width:    number;
  height:   number;
  duration: null;
  url:      string;
}
