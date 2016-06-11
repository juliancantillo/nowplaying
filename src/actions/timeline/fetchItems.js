import listItems from './listItems';
import showLoading from '../showLoading';
import request from 'superagent';

module.exports = function() {
  return dispatch => {
    dispatch(showLoading(true));

    return request
      .get('testing_twits.json')
      .type('json')
      .end((err, res) => {
        dispatch(showLoading(false));
        if(res){
          dispatch(listItems(res.body));
        }
      });

  }
};
