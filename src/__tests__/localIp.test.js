/* @flow */

import {getLocalIps} from '../localIp';

jest.mock('os');

describe('localIp', () => {
  it('should exists', (): void => {
    expect(typeof getLocalIps).toEqual('function');
  });

  it('should return valid responses', (): Promise<void> => {
    return getLocalIps()
    .then((result): void => {
      expect(result).toEqual([
        {
          address: '192.168.1.228',
          type: 'en0',
        }, {
          address: '192.168.1.229',
          type: 'en0:1',
        },
      ]);
    });
  });
});
