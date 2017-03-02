/* @flow */

import {getPublicIp} from '../publicIp';

jest.mock('public-ip');

import publicIp from 'public-ip';

describe('publicIp', () => {
  it('should exists', (): void => {
    expect(typeof getPublicIp).toEqual('function');
  });

  it('should return valid responses', (): Promise<void> => {
    publicIp._setToDefaultIP();

    return getPublicIp()
    .then((result): void => {
      expect(result).toEqual([
        {
          address: '1.1.1.1',
          type: 'public',
        },
      ]);
    });
  });

  it('should return empty responses on error', (): Promise<void> => {
    publicIp._setToNullIP();

    return getPublicIp()
    .then((result): void => {
      expect(result).toEqual([]);
    });
  });
});
