/* @flow */

const DEFAULT_IP = '1.1.1.1';

let _ip = DEFAULT_IP;

module.exports = {
  _setToDefaultIP(): void {
    _ip = DEFAULT_IP;
  },

  _setToNullIP(): void {
    _ip = null;
  },

  v4(): Promise<string> {
    if (_ip != null) {
      return Promise.resolve(_ip);
    }

    return Promise.reject(new Error('Timeout'));
  },
};
