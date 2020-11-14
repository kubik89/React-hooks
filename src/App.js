import logo from './logo.svg';
import './App.css';
import React from "react";
import Counter from "./components/counter";
import {CounterFunctionComp} from "./components/counter-functionComp";

function App() {
  return (
    <div>
      {/*<Counter/>*/}
      <CounterFunctionComp/>
    </div>
  );
}

export default App;
