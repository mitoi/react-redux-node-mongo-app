import React, { Component } from 'react';
import { connect } from 'react-redux';

class Products extends Component{
    render () {
        const { isAuthenticated, user } = this.props.auth;
        return (
            <div className="container" style={{marginLeft:'0px'}}>
                <div className="row">
                    <div className="col-sm-12"> 
                    Products Page
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
export default connect(mapStateToProps)(Products);