export default interface PagedResponse<T> {
  success: boolean;
  pagging: PaggingInfo;
  data: T[];
}

export interface PaggingInfo {
  totalRecords: number;
  currentPage: number;
  totalPages: number;
  nextPage: number | null;
  prevPage: number | null;
}
