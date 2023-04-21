import { PermissionsAndroid, Platform } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

export interface UploadedFile {
  fullUrl: string;
  fileName: string;
  extension: string;
}

export enum Directory {
  NameProjectFolder = 'NameProjectFolder',
}

const downloadDir = Platform.OS === 'ios' ? RNFetchBlob.fs.dirs.DocumentDir : RNFetchBlob.fs.dirs.DownloadDir;

export default class FileHelpers {
  static getMimeType = (type: string) => {
    switch (type) {
      case 'doc':
        return 'application/msword';
      case 'docx':
        return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      case 'ppt':
        return 'application/vnd.ms-powerpoint';
      case 'pptx':
        return 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
      case 'xls':
        return 'application/vnd.ms-excel';
      case 'xlsx':
        return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      case 'pdf':
        return 'application/pdf';
      case 'png':
        return 'image/png';
      case 'bmp':
        return 'application/x-MS-bmp';
      case 'gif':
        return 'image/gif';
      case 'jpg':
        return 'image/jpeg';
      case 'jpeg':
        return 'image/jpeg';
      case 'avi':
        return 'video/x-msvideo';
      case 'aac':
        return 'audio/x-aac';
      case 'mp3':
        return 'audio/mpeg';
      case 'mp4':
        return 'video/mp4';
      case 'apk':
        return 'application/vnd.Android.package-archive';
      case 'txt':
      case 'log':
      case 'h':
      case 'cpp':
      case 'js':
      case 'html':
        return 'text/plain';
      default:
        return '*/*';
    }
  };

  static checkPermissions = async () => {
    let success: boolean = false;
    let grantedRead: string = '';
    let grantedWrite: string = '';

    try {
      if (Platform.OS === 'ios') {
        success = true;
      } else if (Platform.OS === 'android') {
        grantedRead = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
        grantedWrite = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);

        if (grantedRead === PermissionsAndroid.RESULTS.GRANTED && grantedWrite === PermissionsAndroid.RESULTS.GRANTED) {
          success = true;
        }
      } else {
        console.log('permission denied for unknown OS', Platform.OS);
      }
    } catch (err) {
      console.warn(err);
    }

    return success;
  };

  static checkAndCreateDir = async (directory: string) => {
    const dir = `${downloadDir}/${directory}`;
    const assetsDirExists = await RNFetchBlob.fs.isDir(dir);

    if (!assetsDirExists) {
      RNFetchBlob.fs
        .mkdir(dir)
        .then(res => {
          console.log('res', res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  static downloadFile = async (file: UploadedFile, directory: string) => {
    if (!file?.fullUrl) {
      return;
    }

    const status = await FileHelpers.checkPermissions();
    await FileHelpers.checkAndCreateDir(directory);

    if (!status) {
      throw new Error();
    }

    const dir = `${downloadDir}/${directory}`;
    const path = `${dir}/${file.fileName}`;

    return RNFetchBlob.config({
      path: path,
      fileCache: true,
      addAndroidDownloads: {
        path: path,
        useDownloadManager: true,
        notification: true,
        mime: FileHelpers.getMimeType(file.extension!),
        description: 'Файл загружается',
      },
    })
      .fetch('GET', file.fullUrl, {
        //some headers ..
      })
      .then(res => {
        return res;
      })
      .catch(error => {
        console.log('downloadFile error', error);
        throw error;
      });
  };

  static existFile = async (name: string, directory: string) => {
    const path = `${downloadDir}/${directory}/${name}`;
    const exists = await RNFetchBlob.fs.exists(path);

    return exists;
  };

  static getFilePath = (name: string, directory: string) => {
    return `file:///${downloadDir}/${directory}/${name}`;
  };

  static getReadPermission = async () => {
    if (Platform.OS === 'ios') {
      return true;
    }

    const grantedRead = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);

    return grantedRead;
  };
}
