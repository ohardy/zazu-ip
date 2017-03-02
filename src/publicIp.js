/* @flow */

import publicIp from 'public-ip';

export function getPublicIp(): Promise<Array<Object>> {
  return publicIp.v4()
  .then((ipv4): Array<Object> => {
    return [
      {
        type: 'public',
        address: ipv4,
      },
    ];
  })
  .catch((err): Array<Object> => {
    return [];
  });
}
