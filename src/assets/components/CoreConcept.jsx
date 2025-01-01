import React from 'react';
import CORE_CONCEPTS from "../../data";
import Concepts from "./concept";
function Concets(){
    return(
        < section id="core-concepts">
        <h2>core conceps</h2>
        <ul>
        {CORE_CONCEPTS.map((items)=>{
        return <Concepts {...items}/>
        })}
        </ul>
        </section>
    )
}
export default Concets;
