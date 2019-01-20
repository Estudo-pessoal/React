import React, { Component } from 'react';

class SubmitCustumizado extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="pure-control-group">
                <label></label>
                <button type={this.props.type} className="pure-button pure-button-primary">Gravar</button>
            </div>
        )
    }
}
export default SubmitCustumizado;