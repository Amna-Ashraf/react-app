import React from "react";
import CalcProvider from "../context/calcContext"
import NavBar from "../components/navBar"
function Calculator(){
    return(
        <CalcProvider>
        <NavBar></NavBar>
        </CalcProvider>
    )
}

export default Calculator