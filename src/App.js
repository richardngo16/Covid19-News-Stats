import React from "react";
import "./App.css";
import { RecoilRoot } from 'recoil';
import Selector from './components/Selector';
import LeftDrawer from './components/LeftDrawer';
function App() {
  return (
    <RecoilRoot>
      <div className="App" style={{ display: 'flex' }}>
        <LeftDrawer />
        <Selector />
      </div>
    </RecoilRoot>
  );
}

export default App;

