import React from 'react'
import {Link} from 'react-router';



// This is a static page. It uses an array to hold data about the resources
// and maintain DRY
const Home = ({...props}) => (



  <div>
<h1>home</h1>
  <h2><Link to='landing'>Ima link to landing!</Link></h2>
  </div>

)


export default Home
