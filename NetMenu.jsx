import React from "react";

const NetMenu =()=>{
    return(
        <div className="menuBlockN">
        <ul>
            <li> 
                <select className="Dropdown">
                    <option>English</option>
                    <option>Kannada</option>
                    <option>Hindi</option>
                </select>
            </li>
        
            <li>
               <a href="https://github.com/AppuMali"> <button> Sign In </button> </a>
            </li>
        
        </ul>
       </div> 
    )
}
export default NetMenu;