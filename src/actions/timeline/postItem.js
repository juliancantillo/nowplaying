import showErrors from '../showErrors';
import fetchItems from './fetchItems';
import showLoading from '../showLoading';
import request from 'superagent';

import config from 'config';

module.exports = function(text) {
  return dispatch => {
    dispatch(showLoading(true));

    return request
      .post(config.api.post)
      .send({ text: text })
      .type('json')
      .end((err, res) => {
        dispatch(showLoading(false));
        if (err && err.status === 404) {
          dispatch(showErrors(res.body.errors));
        }

        dispatch(fetchItems());
      });

  }
};
