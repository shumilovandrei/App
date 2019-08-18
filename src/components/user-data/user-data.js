import React, { Component } from 'react';

export default class UserData extends Component {

    handleClick(e) {
        this.props.callback(this.props.id);
    }

    render() {
        return (
            <tr onClick={this.handleClick.bind(this)} key={this.props.key}>
                <td>{ this.props.name }</td>
                <td>{ this.props.role }</td>
                <td>{ this.props.birthday }</td>
                <td>{ this.props.phone }</td>
            </tr>
        );
    }
}