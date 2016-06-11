import React from 'react';
import { connect } from 'react-redux';

import { PostItem } from './PostItemComponent';

function mapStateToProps(state) {
  return {
    items: state.timeline.items
  };
}

export class TimelineComponent extends React.Component {
  static propTypes = {
    items: React.PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {

    let { items } = this.props;

    if (!items.length) {
      return (
        <div className="alert alert-info">
          :( No items to show
        </div>
      );
    }

    let timeline = items.map((item, idx) => {
      <PostItem key={idx} item={item} />
    });

    return (
      <div>
        {timeline}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(TimelineComponent)
