/* @flow */

let _networkInterfaces = {
  lo0: [
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
    }, {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      scopeid: 0,
      internal: true,
    }, {
      address: 'fe80::1',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      scopeid: 1,
      internal: true,
    },
  ],
  en0: [
    {
      address: 'fe80::fe80:fe80:fe80:fe80',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: 'b8:b8:b8:b8:b8:b8',
      scopeid: 4,
      internal: false,
    }, {
      address: '192.168.1.228',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: 'b8:b8:b8:b8:b8:b8',
      internal: false,
    }, {
      address: '192.168.1.229',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: 'b8:b8:b8:b8:b8:b8',
      internal: false,
    },
  ],
  awdl0: [
    {
      address: 'fe80::fe80:fe80:fe80:fe80',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '9e:9e:9e:9e:9e:9e',
      scopeid: 8,
      internal: false,
    },
  ],
  utun0: [
    {
      address: 'fe80::fe80:fe80:fe80:fe80',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      scopeid: 10,
      internal: false,
    },
  ],
  utun1: [
    {
      address: 'fe80::fe80:fe80:fe80:fe80',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      scopeid: 11,
      internal: false,
    },
  ],
};

module.exports = {
  networkInterfaces() {
    return _networkInterfaces;
  },
};
