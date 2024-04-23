interface IPagination {
  start: number;
  limit: number;
  total: number;
}

export interface IMeta {
  pagination: IPagination;
}
