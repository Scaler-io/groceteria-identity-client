export interface IPaginatedResult {
  pageIndex: number;
  pageSize: number;
  count: number;
  data: any[];
}

export interface PaginationMetadata{
  count: number;
  top: number;
  currentPage: number;
}

export class PaginatedResult implements IPaginatedResult {
  constructor(public pageIndex, public pageSize, public count, public data) {}
}
