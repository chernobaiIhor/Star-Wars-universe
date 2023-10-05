export interface SearchRequest {
  page?: number;
  size?: number;
  keyword?: string;
}
export interface SearchResponse<T> {
  data: SearchDataApi<T>;
}
export interface SearchDataApi<T> {
  count: number;
  results: T[];
  next?: string;
  previous?: string;
}
