import React , { Component } from 'react';
import PanelBox from './PanelBox';

class Detail extends Component{

    navigateToList = () =>{
        // on click fun to navigate back to list page
        this.props.history.push("/products");
    }

    render(){
        const content = (
            <div>
                {JSON.stringify(this.props.match.params)}
                {/* this match prop from defualt will read the values from url snd retun an obj with key-value pair.  */}
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