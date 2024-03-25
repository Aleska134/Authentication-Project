import React, { useState, useEffect, useContext }from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"

export const Navbar = ({authAttempt}) => {
const [authStatus, setAuthStatus] = useState("pending")
const {store,actions} = useContext(Context)
const token = store.token


useEffect(()=>{
  let authenticate = async () => {
    console.log(store.token)
    let result = await actions.authenticateUser()
    if(result){
      setAuthStatus("approved")
      console.log("authenticateUser")
    }else{
      setAuthStatus("denied")
    }
  }
  authenticate()
},[authAttempt])

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Authentication Project</span>
				</Link>
				<div className="ml-auto">
					{/* <Link to="/login">
						<button className="btn btn-primary">login/Register</button>
					</Link> */}
					{store.token ?(
            <div className="text-end p-3">
            <Link to="/" className="nav-link">
              <button className="btn btn-danger" onClick={() => actions.logOut() }>
                Logout
              </button>
                  </Link>
              
          </div>
                        ):(
                        <div className="text-end p-3">
                        <Link to="/login" className="nav-link">
                          <button className="btn btn-primary">
                            Login
                          </button>
            
                              </Link>
                          
                      </div>)
            }
				</div>
			</div>
		</nav>
	);
};
