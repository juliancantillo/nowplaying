import React from 'react';
import moment from 'moment';

export default class PostToolbarComponent extends React.Component {
  static propTypes = {
    item_id: React.PropTypes.number,
    created_at: React.PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    let { item_id, created_at } = this.props;

    let created_diff = moment(new Date(created_at)).fromNow();

    return (
      <div className="post-item__toolbar">
        <span className="text-muted">{ created_diff }</span>
        <ul className="list-inline pull-right">
          <li>
            <a href={'https://twitter.com/itent/tweet?in_reply_to='+item_id}
              target="blank"
              className="btn btn-link">
              <i className="fa fa-mail-reply"/>
            </a>
          </li>
          <li>
            <a href={'https://twitter.com/itent/retweet?tweet_id='+item_id}
              target="blank"
              className="btn btn-link">
              <i className="fa fa-retweet"/>
            </a>
          </li>
          <li>
            <a href={'https://twitter.com/itent/like?tweet_id='+item_id}
              target="blank"
              className="btn btn-link">
              <i className="fa fa-heart-o"/>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
