/* @flow */

import os from 'os';

export function getLocalIps(): Promise<Array<Object>> {
  var ifaces = os.networkInterfaces();

  let responses = [];

  Object.keys(ifaces).forEach((ifName: string): void => {
    let alias = 0;

    ifaces[ifName].forEach((iface: Object): void => {
      if (
        iface.internal !== false ||
        iface.family !== 'IPv4'
      ) {
        return;
      }

      if (alias > 0) {
        ifName = `${ifName}:${alias}`;
      }

      responses.push({
        type: ifName,
        address: iface.address,
      });

      alias++;
    });
  });

  return Promise.resolve(responses);
}
