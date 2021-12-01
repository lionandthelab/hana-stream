export interface Stream {
  id: number;
  title: string;
  url: string;
  tag: string;
  preacher: string;
  thumbnailUrl: string;
  date: string;
}

export interface YouTube{
  kind: string,
  etag: string,
  nextPageToken: string,
  prevPageToken: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  },
  items:[]
}

export interface Meta {
  totalCount: number;
}
