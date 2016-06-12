import React from 'react';
import { connect } from 'react-redux';
import PostToolbar from './post/PostToolbarComponent';
import PostUser from './post/PostUserComponent';
import twitterText from 'twitter-text';


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

    if(!item.entities.urls.length){
      return [];
    }

    return item.entities.urls.map((url) => {
        // Regex taken from https://gist.github.com/afeld/1254889
        try {
          let temp = url.expanded_url.match(/(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
          return temp[1];
        } catch(e) {
          return false;
        }

      });
  }

  render() {
    let { item } = this.props;

    let video = this.processUrl(item);

    let item_text = { __html: twitterText.autoLink(item.text, item.entities)};

    let videoPlayer = null;

    if(video && video != ''){
      if (!item.showPlayer ) {
        videoPlayer = (
          <div className="col-xs-4">
            <div className="player-wrapper" onClick={this.props.showPlayerToggler}>
              <img className="img-responsive" src={`http://img.youtube.com/vi/${video}/0.jpg`} />
            </div>
          </div>);
      }else{
        videoPlayer = (
          <div className="col-xs-4">
            <div className="embed-responsive embed-responsive-4by3">
              <iframe className="embed-responsive-item" id="ytplayer"
                type="text/html"
                src={`https://www.youtube.com/embed/${video}?autoplay=1&enablejsapi=1&modestbranding=1`}
                frameborder="0">
              </iframe>
            </div>
          </div>);
      }
    }

    return (
      <div className="post-item">
        <div className="post-item__body">
          <div className="row">
            {videoPlayer}
            <div className={ video != '' ? 'col-xs-8' : 'col-xs-12' }>
              <PostUser user={item.user} />
              <div className="post-item__content" dangerouslySetInnerHTML={item_text} />
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

