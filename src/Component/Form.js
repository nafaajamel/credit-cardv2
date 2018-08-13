

import React, { Component } from 'react';
class Form extends Component {

    render() {
        return (

            <div className="form">
                <input value={this.props.number}  onChange={this.props.changeNumber} type="text" placeholder="CARD NUMBER" />
                <input  onChange={this.props.changeName} type="text" placeholder="YOUR NAME" />
                <input value={this.props.date} type="text" onChange={this.props.changeThru} placeholder="XX/YY" />

            </div>

        );
    }
}

export default Form;