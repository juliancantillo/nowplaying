import React from 'react';
import { connect } from 'react-redux';
import PostToolbar from './post/PostToolbarComponent';
import PostUser from './post/PostUserComponent';


function mapDispatchToProps(dispatch, ownProps) {
  return {
    showPlayerToggler: (item_id, video) => {
      dispatch({ type: 'TOGGLE_PLAYER', item_id: ownProps.item.id });
    }
  };
}

export class PostItemComponent extends React.Component {
  static propTypes = {
    item: React.PropTypes.object,
    showPlayer: React.PropTypes.bool
  };

  constructor(props) {
    super(props);

  }

  processUrl(item) {

    let video = [];

    if(item.entities.urls.length){

      video = item.entities.urls.map((url) => {
        let temp = url.expanded_url.match(/(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        return typeof temp[1] !== 'undefined' ? temp[1] : null;
      });
    }

    return video;
  }

  render() {
    let { item } = this.props;

    let video = this.processUrl(item);

    let videoPlayer = null;

    if (!item.showPlayer) {
      videoPlayer = (
        <div className="player-wrapper" onClick={this.props.showPlayerToggler}>
          <img className="img-responsive" src={`http://img.youtube.com/vi/${video}/0.jpg`} />
        </div>);
    }else{
      videoPlayer = (<div className="embed-responsive embed-responsive-4by3">
        <iframe className="embed-responsive-item" id="ytplayer"
          type="text/html"
          src={`https://www.youtube.com/embed/${video}?autoplay=1&enablejsapi=1&modestbranding=1`}
          frameborder="0">
        </iframe>
      </div>);
    }

    return (
      <div className="post-item">
        <div className="post-item__body">
          <div className="row">
            <div className="col-xs-4">
              {videoPlayer}
            </div>
            <div className="col-xs-8">
              <PostUser user={item.user} />
              <div className="post-item__content">
                { item.text }
              </div>
              <PostToolbar item_id={item.id} created_at={item.created_at} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
// Implement map dispatch to props
)(PostItemComponent)

