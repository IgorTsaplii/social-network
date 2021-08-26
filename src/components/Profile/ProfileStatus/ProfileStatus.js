import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode = () =>{
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateProfileStatus(this.state.status)
  }

  onStatusChange = (event) => {
    this.setState({
      status: event.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <>
        {this.state.editMode ? (
          <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode} type="text" value={this.state.status} />
        ) : (
          <p onDoubleClick={this.activateEditMode}>{this.props.status || "status"}</p>
        )}
      </>
    );
  }
}

export default ProfileStatus;
