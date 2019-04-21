import React, { Component } from 'react';
import Product from './products';
import Create from './create';
import Home from './home';
import { Route, Switch} from 'react-router-dom';
import PageNotFound from './PageNotFound';
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

      this.setState((prevState) => {
        return {
            products : prevState.products.filter((item, index)=>{
                return index !== productKey;
            })
        }
      });
  }
  
  createProducts = (product) =>{
      this.setState((prevState)=>{
        return{
          products : [
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
           <PrivateRoute path="/products/:pid" component={Detail}/>
          <PrivateRoute path="/products" render={()=>{
            return <Product products={this.state.products} deleteProducts={this.deleteProducts} />
          }}/>
          <PrivateRoute path="/create" render={()=>{
            return <Create createProducts ={this.createProducts}/>
          }}/>
          <Route component={PageNotFound}/> 
      </Switch>
      
      </div>
     
    );

  }
}

export default App;
