import React from "react";
import "./App.css";
import { RecoilRoot } from 'recoil';
import Selector from './components/Selector';
import LeftDrawer from './components/LeftDrawer';
import Canvas from './components/Canvas';
function App() {
  return (
    <RecoilRoot>
      <div className="App" style={{ display: 'flex' }}>
        <LeftDrawer />
        <div style={{ width: '100%' }}>
          <Selector />
          <Canvas />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;

