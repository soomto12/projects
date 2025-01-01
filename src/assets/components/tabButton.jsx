import React from "react";

function TabButton({children ,onSelecet,color}){
    return(
<li>
<button className={color ? "active" : undefined} onClick={onSelecet}>{children}</button>

</li>

    );
}

export default TabButton;