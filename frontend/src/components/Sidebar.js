import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {setCurrentView} from '../actions/routeView';
import store from '../store';
import { SET_CURRENT_VIEW } from '../actions/types';


class Sidebar extends Component {

    navigateToView = (e) => {
        e.preventDefault();
        const view = e.target.attributes.viewname.nodeValue;
        store.dispatch(setCurrentView(view, SET_CURRENT_VIEW));
    }

    render() {       
        const { user } = this.props.auth;
        return (
            <div className="d-flex" id="wrapper">
                <div className="bg-light border-right" id="sidebar-wrapper">
                    <div className="sidebar-heading">
                        <img src={require('../rick_avatar.jpg')} alt={user.name} title={user.name}
                                    className="rounded-circle"
                                    style={{ width: '45px', marginRight: '15px'}} />
                        {user.name}
                    </div>
                    <div className="list-group list-group-flush">
                        <Link to='/dashboard' onClick={this.navigateToView} viewname = "Dashboard" className="list-group-item list-group-item-action bg-light" >Dashboard</Link>
                        <Link to="/orders" onClick={this.navigateToView} viewname = "Orders" className="list-group-item list-group-item-action bg-light" >Orders</Link>
                        <Link to="/products" onClick={this.navigateToView} viewname = "Products" className="list-group-item list-group-item-action bg-light" >Products</Link>
                        <Link to="/crm" className="list-group-item list-group-item-action bg-light" >CRM</Link>
                        <Link to="/marketing" className="list-group-item list-group-item-action bg-light" >Marketing</Link>
                        <Link to="/reports" className="list-group-item list-group-item-action bg-light" >Reports</Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        currentView: state.viewRouteReducer.currentView
    }
}
export default connect(mapStateToProps)(Sidebar);