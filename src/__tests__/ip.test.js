/* @flow */

import sinon from 'sinon';

var ip = require('../ip');

import {TEXT_TO_MATCH} from '../constants';

const FAKE_RESPONSE = {
  address: 'test address',
  type: 'test',
};

class FakePluginContext {
  console: Object;

  constructor() {
    this.console = {
      error(): void {

      },
    };
  }
}

/* eslint-disable no-loop-func */

describe('ip', () => {
  let pluginContext;

  beforeEach((): void => {
    pluginContext = new FakePluginContext();
  });

  it('should exists', (): void => {
    expect(typeof ip).toEqual('function');
  });

  it(`should respond to ${TEXT_TO_MATCH}`, (): void => {
    // $FlowFixMe
    let ipObj = ip(pluginContext);
    let result = ipObj.respondsTo(TEXT_TO_MATCH);

    expect(result).toBeDefined();

    if (result != null) {
      expect(result[0]).toEqual(TEXT_TO_MATCH);
    }
  });

  for (let text of ['ip2', 'test', '', 'i-p']) {
    it(`should not respond to ${text}`, (): void => {
      // $FlowFixMe
      let ipObj = ip(pluginContext);
      let result = ipObj.respondsTo(text);
      expect(result).toBeNull();
    });
  }

  it('should return empty responses when no available ip', (): Promise<void> => {
    // $FlowFixMe
    let ipObj = ip(pluginContext);

    let __getPromises = sinon.stub(ipObj, '__getPromises').callsFake((): Array<Promise<Object>> => {
      return [];
    });

    return ipObj.search(TEXT_TO_MATCH)
    .then((result): void => {
      expect(result).toEqual([]);

      __getPromises.restore();
    });
  });

  it('should return valid responses', (): Promise<void> => {
    // $FlowFixMe
    let ipObj = ip(pluginContext);

    function getFakeIps(): Promise<Array<Object>> {
      return Promise.resolve([FAKE_RESPONSE]);
    }

    let __getPromises = sinon.stub(ipObj, '__getPromises').callsFake((): Array<Promise<Array<Object>>> => {
      return [
        getFakeIps(),
      ];
    });

    return ipObj.search(TEXT_TO_MATCH)
    .then((result): void => {
      expect(result).toEqual([
        {
          title: FAKE_RESPONSE.address,
          subtitle: `Your ${FAKE_RESPONSE.type} IP`,
          value: FAKE_RESPONSE.address,
        },
      ]);

      __getPromises.restore();
    });
  });

  it('should return empty responses on error and log it', (): Promise<void> => {
    // $FlowFixMe
    let ipObj = ip(pluginContext);

    function getFakeIps(): Promise<Array<Object>> {
      return Promise.reject(new Error('Test error'));
    }

    let pluginContextConsole = sinon.spy(pluginContext.console, 'error');
    let __getPromises = sinon.stub(ipObj, '__getPromises').callsFake((): Array<Promise<Array<Object>>> => {
      return [
        getFakeIps(),
      ];
    });

    return ipObj.search(TEXT_TO_MATCH)
    .then((result): void => {
      expect(result).toEqual([]);
      expect(pluginContextConsole.callCount).toEqual(1);

      __getPromises.restore();
    });
  });
});
/* eslint-enable no-loop-func */
