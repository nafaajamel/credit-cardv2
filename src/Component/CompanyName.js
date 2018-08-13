
import React, { Component } from 'react'
class CompanyName extends Component {
    state = {}
    render() {
        return (
            <h1>
                <b>{this.props.Company}</b>
            </h1>

        );
    }
}

export default CompanyName;