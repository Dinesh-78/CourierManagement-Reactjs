import React from "react";
function Header({name}){
    return(
       <div style={{background: "yellow",padding: 20,width:400}}>
          <h1>We are started new courier Service</h1>
          <p>Hello Just {name} Started </p>

       </div>
    );
}
export default Header;