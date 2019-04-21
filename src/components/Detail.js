import React , { Component } from 'react';
import PanelBox from './PanelBox';

class Detail extends Component{

    navigateToList = () =>{
        this.props.history.push("/products");
    }

    render(){
        const content = (
            <div>
                {JSON.stringify(this.props.match.params)}
          
            <br/>
            <button className ="btn btn-success" onClick={this.navigateToList}>back to list</button>
            </div>
        )
        return(
           <PanelBox heading="Products detail" content={content}/>
        )
    }
}

export default Detail;