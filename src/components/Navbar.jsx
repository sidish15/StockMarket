import React from 'react'
import "./Navbar.css"
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
        const { loginWithRedirect,user, logout,isAuthenticated} = useAuth0();
  return (
 <>
 <nav>
		<input type="checkbox" id="check"/>
		<label for="check" className="checkbtn">
			<i className="fas fa-bars"></i>
		</label>
		<label className="logo">Stock Price</label>
		<ul>
			
			<li> {isAuthenticated ?  (<button className="log" onClick={() => logout({ returnTo: window.location.origin } )}> Log Out</button>) :
           (  <button className="log" onClick={() => loginWithRedirect()}>Log In </button>) }</li>
		</ul>
	</nav>
 </>
  )
}

export default Navbar
