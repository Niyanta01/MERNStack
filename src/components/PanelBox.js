import React , { Component } from 'react';

class PanelBox extends Component {

    render(){

        return <div className = "panel panel-success">
            <div className ="panel-heading">{this.props.heading}</div>
            <div className="panel-body">{this.props.content}</div>
        </div>
    }
}

export default PanelBox;