import React from "react";
import CalcProvider from "../context/calcContext";
import NavBar from "../components/navBar";
function Quote(){
    return(
        <CalcProvider>
        <NavBar></NavBar>
        <div className="quote">
        </div>
        </CalcProvider>
    )
}

export default Quote