export default interface CfResponse<T> {
  status: 'OK' | 'FAILED';
  comment: string | undefined;
  result: T | undefined;
}
