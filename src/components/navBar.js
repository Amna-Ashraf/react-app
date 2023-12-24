import React from "react";

function NavBar(){
    return(
        <div className="navBar">
            <ul className="navbar-menu">
                <li><a href="/">Home</a></li>
                <li><a href="/calculator">Calculator</a></li>
                <li><a href="/Qoute">Quote</a></li>
            </ul>
        </div>
    )
}
export default NavBar