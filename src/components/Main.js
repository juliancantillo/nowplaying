require('styles/App.scss');

import React from 'react';
import PostForm from './PostFormComponent';
import Timeline from './TimelineComponent';

class AppComponent extends React.Component {

  componentDidMount() {
    this.props.actions.fetchItems();
  }

  render() {
    return (
      <div className="index">
        <div>
          <h1>#nowplaying in San Francisco</h1>
          <p>
            This page shows #nowplaying tweets in San Francisco that contain a youtube link.
            It also allows you to post a #nowplaying tweet with a YouTube link.
          </p>
        </div>
        <PostForm />
        <Timeline />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
