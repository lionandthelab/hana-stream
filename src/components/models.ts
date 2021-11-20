export interface Stream {
  id: number;
  title: string;
  url: string;
  tag: string;
  messenger: string;
  thumbnailUrl: string;
  date: Date;
}

export interface Meta {
  totalCount: number;
}
