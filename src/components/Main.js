import React from "react";

export default class Home extends React.Component {
    render() {
        return (
            <div className='main-container'>
                {this.props.children}
            </div>
        )
    }
}