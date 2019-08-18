import React, { Component } from 'react';

export default class ActiveUser extends Component {

    render() {
        if ("undefined" === typeof this.props.user) {
            return(
                <h2>Nothing found :(</h2>
            );
        }

        return (
            <div className="h-bordered text-center">
                <h2>{this.props.user.name}</h2>
                <table className="table table-condensed text-center">
                    <tbody>
                        <tr>
                            <td>Date of birth:</td>
                            <td>{this.props.user.birthday}</td>
                        </tr>
                        <tr>
                            <td>Role:</td>
                            <td>{this.props.user.role}</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>{this.props.user.phone}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}