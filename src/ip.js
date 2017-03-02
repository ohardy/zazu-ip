/* @flow */

import _ from 'lodash';

import {getLocalIps}  from './localIp';
import {getPublicIp}  from './publicIp';

import {TEXT_TO_MATCH} from './constants';

import type {PluginContext} from './types';

module.exports = (pluginContext: PluginContext) => {
  let regexp = new RegExp(`^${TEXT_TO_MATCH}$`);

  return {
    respondsTo(query: string): ?Array<string> {
      return query.match(regexp);
    },

    __getPromises() {
      /* istanbul ignore next */
      return [
        getLocalIps(),
        getPublicIp(),
      ];
    },

    search(query: string, env: Object = {}): Promise<Array<Object>> {
      return Promise.all(this.__getPromises())
      .then((responses) => {
        return _(responses).flatten().map((response): Object => {
          return {
            title: response.address,
            subtitle: `Your ${response.type} IP`,
            value: response.address,
          };
        }).value();
      })
      .catch((err: Error) => {
        pluginContext.console.error(err);
        return [];
      });
    },
  };
};
