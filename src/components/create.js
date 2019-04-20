import React , { Component } from 'react';
import PanelBox from './PanelBox';
import { withRouter } from 'react-router-dom';

class Create extends Component {

    // for initial state of ip tags as we do not want to read it using ip comp we need to make it 
    // or managed by react component so we have to make the state available in react 

    state = {
        products: {
            productName:"",
            productCode:"",
            price:"",
            rating:""
        }
    }

    createProducts = (event) =>{
        event.preventDefault();
        //to get the values of all the ip we have to call the state change on create fun
        //which will return all the prop with key and value obj
        this.props.createProducts(this.state.products);
        this.props.history.push("/products");
        // this method we are clling from app.js where we pass the render method and call the hostory obj 
        console.log(this.state.products);
    }

    //this will change the values from original null values to new state which is he values we input
    productsChangeHandler = (event) =>{
        this.setState((prevState)=>{
            return {
               
                products :{

                    ...prevState.products,
                    [event.target.name] : event.target.value
                }
                
            }
        });
        //while using evetnt obj inside async fun we cannot change the values so we have to use event.persisit()
        //to make use of evnet obj inside event obj ehich will persist its value and on this fun it will 
        //update the value of any ip we type in but we lose all the values of other ip, as we are not preserving 
        //the state of prev so we did ...prevState.products(spread operator) for all the values of ip
        event.persist();
    }

    render(){

        const content = (
        <form>
            {
                JSON.stringify(this.state)
            }
            <div className="form-group">
                <label className="control-label">product name</label>
                <input type="text" value={this.state.products.productName} 
                     onChange={this.productsChangeHandler}   placeholder="product name" name="productName" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="control-label">product code</label>
                <input type="text" value={this.state.products.productCode} 
                 onChange={this.productsChangeHandler} placeholder="productCode" name="productCode" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="control-label">price</label>
                <input type="text"  value={this.state.products.price} 
                 onChange={this.productsChangeHandler} placeholder="price" name="price" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="control-label">rating</label>
                <input type="text" value={this.state.products.rating} 
                 onChange={this.productsChangeHandler} placeholder="rating" name="rating" className="form-control"/> 
            </div>

            <button className="btn btn-success" onClick = {this.createProducts} >Create</button>
        </form>
        )
        
        return <PanelBox heading="Products" content= {content} />
        //we passed content in exp here as the entire content of the form is available inside a var called content
    }
}

export default withRouter(Create); 
// with router willpass the entire comp along with all the dfualt method and we do not have write anything inside rendr ethod in app,js