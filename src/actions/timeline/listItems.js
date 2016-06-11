import {LIST_ITEMS} from './../const';

module.exports = function(items) {
  return {
    type: LIST_ITEMS,
    items
  };
};
