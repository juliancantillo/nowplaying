import {SHOW_LOADING} from './const';

module.exports = function(isLoading=false) {
  return { type: SHOW_LOADING, isLoading };
};
