import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps() {
  return {

  };
}

export class PostForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="well">
        <form action="" method="POST" className="form-inline" role="form">

          <div className="form-group">
            <label className="sr-only" for="">Comment</label>
            <input type="text" className="form-control" id="" placeholder="Your comment..." />
          </div>

          <div className="form-group">
            <label className="sr-only" for="">Video URL</label>
            <input type="text" className="form-control" id="" placeholder="YouTube Video URL" />
          </div>

          <button type="submit" className="btn btn-primary">Post!</button>
        </form>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(PostForm)
