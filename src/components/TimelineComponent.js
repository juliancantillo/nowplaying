import React from 'react';
import { connect } from 'react-redux';

import PostItem from './PostItemComponent';

function mapStateToProps(state) {
  return {
    items: state.timeline.items,
    isLoading: state.timeline.isLoading
  };
}

export class TimelineComponent extends React.Component {
  static propTypes = {
    items: React.PropTypes.array.isRequired,
    isLoading: React.PropTypes.bool
  };

  constructor(props) {
    super(props);
  }

  render() {

    let { items, isLoading } = this.props;

    if (!items.length) {
      return (
        <div className="alert alert-warning">
          :( No items to show
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="alert alert-info">
          Loading...
        </div>
      );
    }

    let timeline = items.map(function(item, idx) {
      return (<PostItem key={idx} item={item} />);
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
