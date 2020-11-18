import logo from './logo.svg';
import './App.css';
import React from "react";
import Counter from "./components/counter";
import {CounterFunctionComp} from "./components/counter-functionComp";
import PostFrom from "./components/PostFrom";
import Posts from "./components/Posts";

function App() {
  return (
    <div>
      {/*<Counter/>*/}
      {/*<CounterFunctionComp/>*/}
      <Posts/>
    </div>
  );
}

export default App;
