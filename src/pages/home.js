import React from "react";
import NavBar from "../components/navBar";

function Home(){
    return(
        <div>
            <NavBar></NavBar>
            <div className="homePage">Welcome! to<br/>Math Magician
            <pre className="points">


            "Math magicians" is a website for all fans of mathematics. <br/>
- Make simple calculations.<br/>
- Read a random math-related quote.
                </pre>
                </div>
        </div>
    )
}

export default Home