import { useContext } from "react"
import { CalcContext } from "../context/calcContext"

const Screen = ()=>{
const {calc} = useContext(CalcContext);

    return(
        <div className="screen" max={70} mode="single">{calc.num ? calc.num:calc.res}</div>
    )
}

export default Screen