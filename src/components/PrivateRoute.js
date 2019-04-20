import React , { Component } from 'react';
import { Route, Redirect} from 'react-router-dom';
import checkUserStatus from '../services/auth';

class PrivateRoute extends Component{
    render(){
        let content = <Route {...this.props}/>
        // we are giving condn here that if the user is not logged in then it should redirect to other page 
        // and for that we are using redirect from react-trouter-dom
        if(!checkUserStatus()){
            content = <Redirect to="/"/>
            // this means if the fun will return false, then it will redirect to home else it will
            // have the contents of route and will work the same
        }
        return(
            <span>{content}</span>

            
            // <Route {...this.props}/>

            // we use spread operator and get all the props for routes and spread everything and then in app.js
            // we use privateRoute tag instead of route tag for the routes we want to protect
        )
    }
}

export default PrivateRoute;