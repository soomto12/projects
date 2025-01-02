import React   from "react";
import Header from "./Header";
import Tab from "./Tab";
import Items from "./CoreConcept";

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Items/>
      <section id="examples">
<h2>Exapmles</h2>
<Tab/>
      </section>
        

        

      </main>
    </div>
  );
}

export default App;
