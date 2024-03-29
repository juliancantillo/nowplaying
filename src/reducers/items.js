/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = {
  showPlayer: false
};

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {

    case 'TOGGLE_PLAYER': {
      if (state.id !== action.item_id) {
        return state;
      }

      return {
        ...state,
        showPlayer: true
      }
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
