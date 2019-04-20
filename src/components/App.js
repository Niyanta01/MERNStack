import React, { Component } from 'react';
// import './App.css';
import Product from './products';
import Create from './create';
import Home from './home';
import { Route, Switch} from 'react-router-dom';
import PageNotFound from './PageNotFound';
// import PanelBox from './PanelBox';
import Navigation from './Navigation';
import Detail from './Detail';
import  PrivateRoute from "./PrivateRoute";

class App extends Component {
  
  state ={
    products : [
      {
        "productName":"leaf",
        "productCode":"90327",
        "price":9.87,
        "rating":3.2, 
        "imageUrl":"https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=696383-847__1&recipeName=350"
      },
      {
        "productName":"cart",
        "productCode":"9087",
        "price":7.57,
        "rating":3.5,
        "imageUrl":"https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=696383-847__1&recipeName=350"
      },
      {
        "productName":"pen",
        "productCode":"5687",
        "price": 5.58,
        "rating":4.2,
        "imageUrl":"https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=696383-847__1&recipeName=350"
      }
  ]
  } 
  

  deleteProducts = (productKey) => {
    //alert("product key" +productKey);
    //so this will make the flow of data from child to parent even though it is usually vice versa.
      this.setState((prevState) => {
        //in this we need to set the state of products updated, when we return it and for the data which is not
        //valid for the product ley thatwe have clicked on so we need to filter data it using product key
        return {
          //we are updaing the array of products by filtering it and we updated state of data 
          //and so the state id updated and as it is bind using props and whichever comp is req using that key 
          //or whichever comp is bind to that state it got updated
            products : prevState.products.filter((item, index)=>{
                return index !== productKey;
            })
        }
      });
  }
  
//to update the values we send from ip to products and add it in list
  createProducts = (product) =>{
      this.setState((prevState)=>{
        //return a new state
        return{
          products : [
            //will have all the inital values and using spread will add it in new list
            ...prevState.products, 
            product
          ]
        }
      });
  }

  render() {

    
    return(
      <div className="container">
      <Navigation/>
      <Switch>
          <Route path="/" component={Home} exact={true}/>
          {/* with this exact true  */}
          <PrivateRoute path="/products/:pid" component={Detail}/>
          {/* route for detail page we deefine before the route for products as if there is nested route then 
          it will look for its first matched route and return back and detail page has route with params so we 
          defined it before */}
          {/* we ue private route her instedad of route as we want to protect these routes */}
          <PrivateRoute path="/products" render={()=>{
            return <Product products={this.state.products} deleteProducts={this.deleteProducts} />
          }}/>
          {/* <Route path="/create" render={({history})=>{
            return <Create createProducts ={this.createProducts} history={history}/>
            // and then this history method we can call inside create product fun in create.js file
          }}/> */}
          <PrivateRoute path="/create" render={()=>{
            return <Create createProducts ={this.createProducts}/>
            // and then this history method we can call inside create product fun in create.js file
          }}/>
          <Route component={PageNotFound}/> 
      </Switch>
      
      {/* when we give route without any path then weare caling that route for invalid requ  */}
      {/* route config and for router path of products, we use a prop called render and then inside 
        that we pass a fun and that will return all the props we used in product */}
        {/* <Home/>
        <Product products={this.state.products} deleteProducts={this.deleteProducts} />
        <Create createProducts ={this.createProducts}/> */}
      </div>
     
      //this is returning the comp we createe but that class name shoudl be given as selector for it rto work
    );

  }
}

export default App;
