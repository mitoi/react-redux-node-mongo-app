import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';

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
                        <Link to="/dashboard" class="list-group-item list-group-item-action bg-light" >Dashboard</Link>
                        <Link to="/orders" class="list-group-item list-group-item-action bg-light" >Orders</Link>
                        <Link to="/Dashboard" class="list-group-item list-group-item-action bg-light" >Products</Link>
                        <Link to="/Dashboard" class="list-group-item list-group-item-action bg-light" >CRM</Link>
                        <Link to="/Dashboard" class="list-group-item list-group-item-action bg-light" >Marketing</Link>
                        <Link to="/Dashboard" class="list-group-item list-group-item-action bg-light" >Reports</Link>
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