import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';

class Dashboard extends Component{
    render () {
        const { isAuthenticated, user } = this.props.auth;
        return (
            <div class="container" style={{marginLeft:'0px'}}>
                <div class="row">
                    <div class="col-sm-6" style={{marginLeft:'-15px'}}>
                        {isAuthenticated ? <Sidebar/> : (<div>Not logged in</div>)} 
                    </div>
                    <div class="col-sm-6"> 
                        Dashboard Page
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
export default connect(mapStateToProps)(Dashboard);