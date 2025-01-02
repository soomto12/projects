import React from "react";
import TabButton from "./tabButton";
import { EXAMPLES } from "../../data-with-examples";
import { useState } from "react";
function Tab(){
  
    let [selectedTopic, setSelectedTopic] = useState("");

    const HandleClick = (topic) => {
  setSelectedTopic(topic);
    }
    let tabContent=<p>please Select a topic</p>;
  
    if (selectedTopic){
  tabContent=<div>
  <h3>{EXAMPLES[selectedTopic].title}</h3>
  <p>{EXAMPLES[selectedTopic].description}</p>
  <pre>
    <code>
      {EXAMPLES[selectedTopic].code}
    </code>
  </pre>
  
  </div>
    }
  return(
    <menu>
      
   <TabButton 
   color={selectedTopic==="components"}
   onSelecet={()=>HandleClick("components")}>components</TabButton>
   <TabButton 
     color={selectedTopic==="jsx"}
   onSelecet={()=>HandleClick("jsx")}>jsx</TabButton>
  <TabButton 
    color={selectedTopic==="props"}
  onSelecet={()=>HandleClick("props")}> props</TabButton>
  <TabButton 
    color={selectedTopic==="state"}
  onSelecet={()=>HandleClick("state")}>state</TabButton>

<>
<div>
{tabContent}
</div>
  
  </>

</menu>
 
  )
  
}

export default Tab;