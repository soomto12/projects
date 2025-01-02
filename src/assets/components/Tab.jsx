import React from "react";
import TabButton from "./tabButton";
import { EXAMPLES } from "../../data-with-examples";
import { useState } from "react";
import Section from "./Section";
import Button from "./button";
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
<Section id="examples" title="Examples">

    
      <Button buttons={
        <>
        <TabButton 
      color={selectedTopic==="components"}
      onClick={()=>HandleClick("components")}>components</TabButton>
      <TabButton 
        color={selectedTopic==="jsx"}
      onClick={()=>HandleClick("jsx")}>jsx</TabButton>
     <TabButton 
       color={selectedTopic==="props"}
     onClick={()=>HandleClick("props")}> props</TabButton>
     <TabButton 
       color={selectedTopic==="state"}
     onClick={()=>HandleClick("state")}>state</TabButton>
        </> 
      }>

{tabContent}
      </Button>
      
   
   
   </Section>
  );
  
  
}

export default Tab;