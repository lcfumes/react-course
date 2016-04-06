import React from "react";
import styles from "../styles";
import UserDetails from "../components/UserDetails";
import UserDetailsWrapper from "./UserDetailsWrapper";

var Link = require('react-router').Link;

var PropTypes = React.PropTypes;

class ConfirmBattle extends React.Component {
    render() {
        return(
            this.props.isLoading === true
            ? <p>LOADING</p>
            : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
                <h1>Confirm Players</h1>
                <div className='col-sm-8 col-sm-offset-2'>
                  <UserDetailsWrapper header='Player 1'>
                    <UserDetails info={this.props.playersInfo[0]} />
                  </UserDetailsWrapper>
                  <UserDetailsWrapper header='Player 2'>
                    <UserDetails info={this.props.playersInfo[1]} />
                  </UserDetailsWrapper>
                </div>
                <div className='col-sm-8 col-sm-offset-2'>
                  <div className='col-sm-12' style={styles.space}>
                    <button type='button' className='btn btn-lg btn-success' onClick={this.props.onInitiateBattle}>Initiate Battle!</button>
                  </div>
                  <div className='col-sm-12' style={styles.space}>
                    <Link to='playerOne'>
                        <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
                    </Link>
                  </div>
                </div>
              </div>
        )
    }
}

ConfirmBattle.PropTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    onInitiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;