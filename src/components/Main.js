require('styles/App.scss');

import React from 'react';
import PostForm from './PostFormComponent';
import Timeline from './TimelineComponent';

class AppComponent extends React.Component {

  componentDidMount() {
    this.props.actions.fetchItems();
  }

  onSubmitHandler(post) {

    let tweet = `#NowPlaying ${post.video} ${post.text}`;

    this.props.actions.postItem(tweet);
  }

  render() {

    let { isLoading } = this.props.timeline;
    let loadingMessage = null;

    if (isLoading) {
      loadingMessage = (
        <div className="alert alert-info">
          <i className="fa fa-spinner"/>Loading...
        </div>
      );
    }

    return (
      <div className="index">
        <div>
          <h1>#nowplaying in San Francisco</h1>
          <p>
            This page shows #nowplaying tweets in San Francisco that contain a youtube link.
            It also allows you to post a #nowplaying tweet with a YouTube link.
          </p>
        </div>
        { loadingMessage }
        <PostForm onSubmitHandler={this.onSubmitHandler.bind(this)} />
        <Timeline />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
