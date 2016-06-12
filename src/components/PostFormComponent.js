import React from 'react';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSubmitHandler: ownProps.onSubmitHandler
  };
}

export class PostForm extends React.Component {

  static propTypes: {
    onSubmitHandler: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  submitHandler (){
    let { commentInput, videoInput } = this.refs;

    if (commentInput.value && videoInput.value) {

      this.props.onSubmitHandler({
        text: commentInput.value,
        video: videoInput.value
      });

    }
  }

  render() {
    return (
      <div className="well">
        <form action="" method="POST" className="form-inline" role="form">

          <div className="form-group">
            <label className="sr-only" for="">Comment</label>
            <input type="text" ref="videoInput" className="form-control" id="" placeholder="Your comment..." />
          </div>

          <div className="form-group">
            <label className="sr-only" for="">Video URL</label>
            <input type="text" ref="commentInput" className="form-control" id="" placeholder="YouTube Video URL" />
          </div>

          <button type="submit" onClick={this.submitHandler.bind(this)} className="btn btn-primary">Post!</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
// Implement map dispatch to props
)(PostForm)
