require('styles/PostItem.scss');

import React from 'react';


export class PostItemComponent extends React.Component {
  static propTypes = {
    item: React.PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          { item.text }
          <div className="user-info">
            {item.user.name}
            <img src={item.user.profile_image_url_https} />
          </div>
        </div>
      </div>
    );
  }
}

export default PostItemComponent;
