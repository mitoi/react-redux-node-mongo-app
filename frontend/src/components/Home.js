import React, { Component } from 'react';
import {connect} from 'react-redux';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Orders from './Orders';
import Dashboard from './Dashboard';
import Products from './Products';


class Home extends Component {
    
    render() {
        const { isAuthenticated, user } = this.props.auth;
        const currentView = this.props.currentView;
        console.log(currentView)
        return (
            <div className="container" style={{marginLeft:'0px'}}>
                <div className="row">
                    <div className="col-sm-6" style={{marginLeft:'-15px'}}>
                        {isAuthenticated ? <Sidebar/> : (<div>Not logged in</div>)} 
                    </div>
                    <div className="col-sm-6">                   
                        {currentView == "Dashboard" && <Dashboard/>}
                        {currentView == "Orders" && <Orders/>}
                        {currentView == "Products" && <Products/>}
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
export default connect(mapStateToProps)(Home);