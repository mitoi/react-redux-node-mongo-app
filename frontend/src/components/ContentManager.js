import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Orders from './Orders';

class ContentManager extends Component{
    render () {
        const { isAuthenticated, user } = this.props.auth;
        return (
            <Router>
            <div class="container">
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/orders" component={Orders} />
            </div>
            </Router>
        );
    }
}


const mapStateToProps = state => {    
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(ContentManager);