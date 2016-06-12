'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'dev',  // feel free to remove the appEnv property here
  api: {
    fetch: '//localhost:3000/api/tweets',
    post: '//localhost:3000/api/tweets'
  }
};

export default Object.freeze(Object.assign({}, baseConfig, config));
