import items from './items';
/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = {
  items: []
};

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {

    case 'LIST_ITEMS': {
      return {
        ...state,
        items: action.items
      };

    }

    case 'TOGGLE_PLAYER': {
      return {
        items: state.items.map((i) =>
          items(i, action)
        )
      }
    }

    case 'SHOW_LOADING': {
      return {
        ...state,
        isLoading: action.isLoading
      };

    }

    case 'SHOW_ERRORS': {
      return {
        ...state,
        errors: action.errors
      };

    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
