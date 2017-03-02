/* @flow */

export type PluginContextConsole = {
  log: (level: string, message: any, data: Object) => void,
  error: (message: any) => void,
};

export type ElectronNativeImageSize = {
  height: number,
  width : number,
};

export type ElectronNativeImageRect = {
  height: number,
  width: number,
  x: number,
  y: number,
};

export type ElectronNativeImageResizeOptions = {
  height ?: number,
  quality ?: 'good' | 'better' | 'best',
  width ?: number,
}

export type ElectronNativeImage = {
  crop: (react: ElectronNativeImageRect) => ElectronNativeImage,
  getAspectRatio: () => number,
  getBitmap: () => Buffer,
  getNativeHandle: () => Buffer,
  getSize: () => ElectronNativeImageSize,
  isEmpty: () => boolean,
  isTemplateImage: () => boolean,
  resize: (options: ElectronNativeImageResizeOptions) => ElectronNativeImage,
  setTemplateImage: (options: Object) => void,
  toBitmap: () => Buffer,
  toDataURL: () => string,
  toJPEG: (quality: number) => Buffer,
  toPNG: () => Buffer,
};

export type ElectronBookmark = {
  title: string,
  url: string,
}

export type ElectronClipboard = {
  availableFormats: (type ?: string) => Array<string>,
  clear: (type ?: string) => void,
  has: (data: string, type ?: string) => boolean,
  read: (data: string, type ?: string) => string,
  readBookmark: () => ElectronBookmark,
  readFindText: () => string,
  readHTML: (type ?: string) => string,
  readImage: (type ?: string) => ElectronNativeImage,
  readRTF: (type ?: string) => string,
  readText: (type ?: string) => string,
  write: (data: string, type ?: string) => void,
  writeBookmark: (title: string, url: string, type ?: string) => void,
  writeFindText: (text: string) => void,
  writeImage: (image: ElectronNativeImage, type ?: string) => void,
  writeRTF: (text: string, type ?: string) => void,
  writeText: (text: string, type ?: string) => void,
};

export type PluginContext = {
  clipboard: ElectronClipboard,
  console: PluginContextConsole,
  cwd: string,
  nativeImage: ElectronNativeImage,
}
