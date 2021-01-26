import React from 'react';
import './App.css';
import SideNav from "./SdieNav";
import Content from "./Content";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <SideNav>
        <Header></Header>
        <Content></Content>
      </SideNav>
    </div>
  );
}

export default App;
