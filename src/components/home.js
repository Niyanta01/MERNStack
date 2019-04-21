import React from 'react';
import {Link} from 'react-router-dom';


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
