export default interface IFormDataImage {
  didCancel?: boolean;
  errorCode?: any;
  errorMessage?: string;
  base64?: string;
  uri?: string;
  width?: number;
  height?: number;
  fileSize?: number;
  type?: string;
  fileName?: string;
  duration?: number;
}
