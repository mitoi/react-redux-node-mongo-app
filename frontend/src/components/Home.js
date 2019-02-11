import React, { Component } from 'react';
import {connect} from 'react-redux';
import Sidebar from './Sidebar';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        return (
            <div>
                {isAuthenticated ? <Sidebar/> : (<div>Not logged in</div>)}  
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