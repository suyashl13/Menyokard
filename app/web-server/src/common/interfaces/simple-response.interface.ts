export default interface SimpleResponse<DataType> {
  success: boolean;
  data: DataType;
}
