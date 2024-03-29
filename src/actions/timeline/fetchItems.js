import listItems from './listItems';
import showLoading from '../showLoading';
import showErrors from '../showErrors';
import request from 'superagent';

import config from 'config';

module.exports = function() {
  return dispatch => {
    dispatch(showLoading(true));

    return request
      .get(config.api.fetch)
      .type('json')
      .end((err, res) => {
        if (err && err.status === 404) {
          dispatch(showErrors(res.body.errors));
        }
        if(res){
          dispatch(listItems(res.body));
        }

        dispatch(showLoading(false));
      });

  }
};
