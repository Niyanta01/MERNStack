// created new comp and imported few things

import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Product extends Component{

    
    state = {
        //this will help to understand the state of any comp and it is a var but takes an obj
        loadImage: true
    }
    
    toggleImage = () => {
        //any method is defined inside class and not render
        // this.setState({
        //     loadImage : false
        // });
        //this can have callback or obj

        this.setState((prevState)=>{
            return {
                loadImage : !prevState.loadImage
            }
        });
    }

    deleteProducts = (productKey) =>{
        this.props.deleteProducts(productKey);
    }

//whatever we return from it will be vailable in view and it is the only method this class can return
    render(){

    
        //created a new var with products detail and then we will use it to show the details
        return <div className = "panel panel-success">
            <div className ="panel-heading">Products</div>
            <div className="panel-body">
             <table className="table table-bordered">

                 <thead>
                 <tr>
                     <th>
                       <button className="btn btn-primary"  onClick={this.toggleImage}>
                       {/* to toggle the label we do */}
                            {
                                this.state.loadImage ? "hide" : "show"
                            }
                       </button> 
                     </th>
                     <th>Product name</th>
                     <th>Product code</th>
                     <th>Price</th>
                     <th> Rating</th>
                     <th></th>
                 </tr>
                 </thead>
                 <tbody>
                 {
                     this.props.products.map((item, index) => (
                         <tr key={index}>
                             <td>
                                 {
                                    //  access state var
                                     this.state.loadImage &&
                                     <img src={item.imageUrl} style={{width:"50px"}}/>
                                 }
                                 
                             </td>

                            <td>
                                <Link to={"/products/"+item.productCode}>
                                 {item.productName}
                                </Link>
                               
                               {/* here we gave link on product name and in the url for it we are passing the 
                                product code along with it */}
                            </td>

                            <td>{item.productCode}</td>
                            <td>{item.price}</td>
                            <td>{item.rating}</td>
                            <td><button className="btn btn-danger" onClick={() => this.deleteProducts(index)}>Remove</button></td>
                         </tr>
                     ))
                 }
                 </tbody>
             </table>
            </div>
        </div>
    
    }
}

// const styles = {
//     image:{
//         width:"50"
//     }
// }
//this is anther way to define style and in JSX we do style ={styles.image}
export default Product;