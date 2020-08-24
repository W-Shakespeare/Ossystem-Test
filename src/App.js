import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ProcessorList } from "./Components";
import EditProcessorList from "./Components/pages/EditProcessorList";
import Header from "./Components/Header";
import "./style.css";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/">
          <ErrorBoundary>
            <ProcessorList />
          </ErrorBoundary>
        </Route>
        <Route exact path="/EditProcessorList">
          <ErrorBoundary>
            <EditProcessorList />
          </ErrorBoundary>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
