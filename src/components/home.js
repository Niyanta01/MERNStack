import React from 'react';
import {Link} from 'react-router-dom';


//if we do not want to use class component when we just need a temp and not fun inside of it then we can 
//use arrow fun  and create a functiopnal comp and then use that and the differece between class and fun is that
//it  doesnt have state and it cannot hild a state and we cannot wtite fun inside fun comp
//
// class Home extends Component{
// render(){
// }
// }

const Home = (props) =>{

    return (
        <div className="jumbotron">
        <h1>Hello, world!</h1>
        <p>...</p>
        <p><Link className="btn btn-primary btn-lg" to="#" role="button">Learn more</Link></p>
        </div>

    )
           
}

export default Home;
