import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        return (
            <div class="d-flex" id="wrapper">
                <div class="bg-light border-right" id="sidebar-wrapper">
                    <div class="sidebar-heading">
                        <img src={require('../profile_pic.jpg')} alt={user.name} title={user.name}
                                    className="rounded-circle"
                                    style={{ width: '45px', marginRight: '15px'}} />
                        {user.name}
                    </div>
                    <div class="list-group list-group-flush">
                        <a href="#" class="list-group-item list-group-item-action bg-light">Dashboard</a>
                        <a href="#" class="list-group-item list-group-item-action bg-light">Shortcuts</a>
                        <a href="#" class="list-group-item list-group-item-action bg-light">Overview</a>
                        <a href="#" class="list-group-item list-group-item-action bg-light">Events</a>
                        <a href="#" class="list-group-item list-group-item-action bg-light">Profile</a>
                        <a href="#" class="list-group-item list-group-item-action bg-light">Status</a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Sidebar);