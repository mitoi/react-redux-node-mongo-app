import React, { Component } from 'react';
import {connect} from 'react-redux';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ContentManager from './ContentManager';


class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        return (
            <div class="container" style={{marginLeft:'0px'}}>
                <div class="row">
                    <div class="col-sm-6" style={{marginLeft:'-15px'}}>
                        {isAuthenticated ? <Sidebar/> : (<div>Not logged in</div>)} 
                    </div>
                    <div class="col-sm-6"> 
                        <ContentManager />
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
export default connect(mapStateToProps)(Home);