import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ProcessorList } from "./Components";
import EditProcessorList from "./Components/pages/EditProcessorList";
import Header from "./Components/Header";
import "./style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={ProcessorList} />
        <Route exact path="/EditProcessorList" component={EditProcessorList} />
      </BrowserRouter>
    </div>
  );
}

export default App;
