import React, { Component } from "react";
import { connect } from 'react-redux';
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends Component {
  componentDidMount(){
    let streamId = this.props.match.params.id;
    this.props.fetchStream(streamId);
  }

  renderActions() {
    return (
      <React.Fragment>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        Stream Delete works!
        <Modal
          header="Delete Stream"
          content="Are you sure you want to delete this stream?"
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

export default connect(null, {fetchStream, deleteStream})(StreamDelete);
