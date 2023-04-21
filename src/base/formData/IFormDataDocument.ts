export default interface IFormDataDocument {
  uri: string;
  fileCopyUri: string;
  copyError?: string;
  type: string;
  name: string;
  size: number;
}
