
import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Product extends Component{

    
    state = {
  
        loadImage: true
    }
    
    toggleImage = () => {
  
        this.setState((prevState)=>{
            return {
                loadImage : !prevState.loadImage
            }
        });
    }

    deleteProducts = (productKey) =>{
        this.props.deleteProducts(productKey);
    }

    render(){

    
        return <div className = "panel panel-success">
            <div className ="panel-heading">Products</div>
            <div className="panel-body">
             <table className="table table-bordered">

                 <thead>
                 <tr>
                     <th>
                       <button className="btn btn-primary"  onClick={this.toggleImage}>
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
                                     this.state.loadImage &&
                                     <img src={item.imageUrl} style={{width:"50px"}}/>
                                 }
                                 
                             </td>

                            <td>
                                <Link to={"/products/"+item.productCode}>
                                 {item.productName}
                                </Link>
                               
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

export default Product;