import { listItems } from './listItems';
import { showLoading } from '../showLoading';
import { request } from 'superagent';

module.exports = function() {
  return dispatch => {
    dispatch(showLoading());

    return request
      .get('testing_twits.json')
      .type('json')
      .end((err, res) => dispatch(listItems(res.body)));

  }
};
