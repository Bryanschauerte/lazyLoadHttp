import React from 'react'
import {Link} from 'react-router';


// This is a static page. It uses an array to hold data about the resources
// and maintain DRY

class Landing extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.context, "props")
    return(
      <div><h1>Landing</h1>
        <h2><Link to='home'>go home</Link></h2>
        </div>
    )
  }
}






export default Landing;
