 import React from "react";
 import ConfirmBattle from "../components/ConfirmBattle";
 import GithubHelpers from "../utils/GithubHelpers";

 class ConfirmBattleContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            palyerInfo: []
        }
        this.handleInitiateBattle = this.handleInitiateBattle.bind(this);
    }

    componentDidMount() {
        var query = this.props.location.query;
        GithubHelpers.getPlayersInfo([query.playerOne, query.playerTwo]).then(function(players) {
            this.setState({
                isLoading: false,
                playersInfo: [players[0], players[1]]
            })
        }.bind(this))
    }

    handleInitiateBattle() {
        this.context.router.push({
            pathname: '/results',
            state: {
                playersInfo: this.state.playersInfo
            }
        });
    }

    // componentWillMount() {
    //     console.log("componentWillMount");
    // }

    // componentWillReceiveProps() {
    //     console.log("componentWillReceiveProps")
    // }

    // componentWillUmount() {
    //     console.log("componentWillUmount")
    // }

    render() {
        return (
            <ConfirmBattle 
                isLoading={this.state.isLoading}
                onInitiateBattle={this.handleInitiateBattle}
                playersInfo={this.state.playersInfo}
            ></ConfirmBattle>
        )
    }

 }

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default ConfirmBattleContainer;