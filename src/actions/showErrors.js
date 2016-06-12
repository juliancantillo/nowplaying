import {SHOW_ERRORS} from './const';

module.exports = function(errors) {
  return { type: SHOW_ERRORS, errors };
};
