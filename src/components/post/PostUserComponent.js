import React from 'react';

export default class PostUserComponent extends React.Component {
  static propTypes = {
    user: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    let { user } = this.props;

    let followButton = (
      <button className="btn btn-primary">
        <i className="fa fa-user-plus" /> Follow
      </button>);

    if(user.following){
      followButton = (<button className="btn btn-primary">
        <i className="fa fa-check" /> Following
      </button>);
    }

    if(user.follow_request_sent){
      followButton = (<button className="btn btn-primary">
        <i className="fa fa-check" /> Request sent
      </button>);
    }

    return (
      <div className="user-info">
        <div className="pic-wrapper">
          <img className="user-pic" src={user.profile_image_url_https} />
        </div>
        <div className="follow-user">
          {followButton}
        </div>
        <span className="user-name">{user.name}</span>
        <span className="user-screen-name">{user.screen_name}</span>
      </div>
    );
  }
}
