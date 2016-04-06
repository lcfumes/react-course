import React from "react";
import Prompt from "../components/Prompt.js";

class PromptContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
    this.handleSubmitUser =  this.handleSubmitUser.bind(this);
  }

  handleSubmitUser(e) {
    e.preventDefault();
    var username = this.state.username;
    this.state = {
      username: ''
    };

    if (this.props.routeParams.playerOne) {
      var pathname =
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: username,
        }
      })
    } else {
      this.context.router.push('/playerTwo/' + username)
    }
  }

  handleUpdateUser(event) {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username}
        ></Prompt>
    )
  }
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default PromptContainer;