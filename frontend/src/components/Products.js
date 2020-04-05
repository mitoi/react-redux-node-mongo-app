import React, { Component } from 'react';
import { connect } from 'react-redux';

class Products extends Component{
    render () {
        const { isAuthenticated, user } = this.props.auth;
        return (
            <div className="container" style={{marginLeft:'0px'}}>
                <div className="row">
                    <div className="col-sm-12">
                        <button className="btn btn-secondary">Add Product</button>
                    </div>
                </div>
                <div className="row" style={{marginTop:"10px"}}>
                    <div className="col-sm-12"> 
                    <table className="table">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Quantity</th>
                            <th>Expiry Date</th>
                        </tr>
                        <tbody>
                            {this.renderProductsData()}
                        </tbody>
                    </table>
                    </div> 
                </div>                
            </div>
        );
    }

    constructor (props) {
        super(props);
        this.state = {
            "products" : [
                {
                    id:"1",
                    name: "Laser Gun",
                    type: "Weapon",
                    quantity: 2,
                    picture: "assets_temp/laser_gun.jpg",
                    expiry_date: null,
                },
                {
                    id:"2",
                    name: "Screwdriver",
                    type: "Tool",
                    quantity: 5,
                    picture: "assets_temp/screwdriver.jpg",
                    expiry_date: null,
                },
                {
                    id:"3",
                    name: "Growth gel",
                    type: "Gel",
                    quantity: 3,
                    picture: "assets_temp/gel.jpg",
                    expiry_date: "05-06-2021",
                }
            ]
        }
    }

    componentDidMount () {
       
    }

    renderProductsData(){
        return this.state.products.map((product, index) => {
            const { id, picture, name, type, quantity, expiry_date } = product //destructuring
            return (
               <tr key={id}>
                  <td><img src={picture} style={{width:"55px"}}/></td>
                  <td>{name}</td>
                  <td>{type}</td>
                  <td>{quantity}</td>
                  <td>{expiry_date}</td>
               </tr>
            )
         })
    }
}


const mapStateToProps = state => {    
    return {
        auth: state.auth,
        currentView: state.viewRouteReducer.currentView
    }
}
export default connect(mapStateToProps)(Products);