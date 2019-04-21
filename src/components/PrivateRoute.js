import React , { Component } from 'react';
import { Route, Redirect} from 'react-router-dom';
import checkUserStatus from '../services/auth';

class PrivateRoute extends Component{
    render(){
        let content = <Route {...this.props}/>
  
        if(!checkUserStatus()){
            content = <Redirect to="/"/>

        }
        return(
            <span>{content}</span>
        )
    }
}

export default PrivateRoute;