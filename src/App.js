import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Settings from './components/Settings';
import { useState } from "react";

const App = () => {
  const background = {
    click: {height: '75%', width: '75%', top: '50%', left: "-30%"},
    hover: {height: '2%', width: '2%'},
    off: {height: '0%', width: '0%'}
  }
  const [menuState, setStateMenu] = useState(false)
  const [settingsState, setStateSettings] = useState(false)
  return (
    <div className="App">
      <Menu clickState={menuState} setClickState={setStateMenu} background={background} />
      <Settings clickState={settingsState} setClickState={setStateSettings}/>
      <Header menuState={menuState} setStateMenu={setStateMenu} settingsState={settingsState} setStateSettings={setStateSettings} background={background}/>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
