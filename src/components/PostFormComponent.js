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

  submitHandler (e){
    e.preventDefault
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
        <form action="" method="POST" className="form-vertical" role="form">
          <div className="row">
            <div className="form-group col-sm-4">
              <label className="sr-only" for="">Video URL</label>
              <input type="text" ref="commentInput" className="form-control" id="" placeholder="YouTube Video URL" />
            </div>

            <div className="form-group col-sm-5">
              <label className="sr-only" for="">Comment</label>
              <input type="url" ref="videoInput" className="form-control" id="" placeholder="Your comment..." />
            </div>

            <div className="form-group col-sm-3">
              <button type="button" onClick={this.submitHandler.bind(this)} className="btn btn-block btn-primary">
                <i className="fa fa-twitter" /> Tweet to #NowPlaying
              </button>
            </div>
          </div>
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
