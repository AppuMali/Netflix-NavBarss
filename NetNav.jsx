import React from "react";
import NetLogo from "./NetLogo";
import NetMenu from "./NetMenu";

const NetNav=()=>{
    return(
        <>
        <div className="divBlockN">
        <NetLogo/>
        <NetMenu/>
        </div> 
        </>
    )
}
export default NetNav;