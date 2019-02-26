import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';

class Dashboard extends Component{
    render () {
        const { isAuthenticated, user } = this.props.auth;
        return (
            <div className="container" style={{marginLeft:'0px'}}>
                <div className="row">
                    <div className="col-sm-12"> 
                        Dashboard Page
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
export default connect(mapStateToProps)(Dashboard);