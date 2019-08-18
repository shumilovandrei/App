import React, { Component } from 'react';
import UserData from '../user-data';

export default class UserList extends Component {

    handleClick(id) {
        this.props.callback(id);
    }

    render() {
        return (
            <table className="table table-striped table-hover user-list">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Date of birth</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                {this.props.users.map(function (user) {
                    return <UserData id={user.id} 
                                    callback={this.handleClick.bind(this)} 
                                    key={user.id} 
                                    name={user.name} 
                                    phone={user.phone} 
                                    role={user.role} 
                                    birthday={user.birthday}/>
                }.bind(this))}
                </tbody>
            </table>
        )
    }
}