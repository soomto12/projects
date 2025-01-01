
import React   from "react";
import {useState} from "react";
import Header from "./Header";
import Items from "./CoreConcept";
import TabButton from "./tabButton";
import { EXAMPLES } from "../../data-with-examples";

function App() {
  let [selectedTopic, setSelectedTopic] = useState("");

  const HandleClick = (topic) => {
setSelectedTopic(topic);
  }

  return (
    <div>
      <Header/>
      <main>
        <Items/>
      <section id="examples">
<h2>Exapmles</h2>
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
</menu>
{!selectedTopic ? (<p>please Select a topic</p>) : (
  <div>
  <h3>{EXAMPLES[selectedTopic].title}</h3>
  <p>{EXAMPLES[selectedTopic].description}</p>
  <pre>
    <code>
      {EXAMPLES[selectedTopic].code}
    </code>
  </pre>

</div>
)}
      </section>
        

        

      </main>
    </div>
  );
}

export default App;
