import React from "react";

function TabButton({children ,color,...props}){
    return(
<li>
<button className={color ? "active" : undefined} {...props}>{children}</button>

</li>

    );
}

export default TabButton;