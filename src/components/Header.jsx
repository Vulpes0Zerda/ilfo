import MenuButton from "./header/MenuButton";
import Points from "./header/Points";
import SettingsButton from "./header/SettingsButton";
import { useState } from "react";

const Header = ({menuState, setStateMenu, settingsState, setStateSettings, background}) => {
  const [hoverSettings, setHoverSettings] = useState(false)
  const [hoverMenu, setHoverMenu] = useState(false)


  
  const iconColor = {
    on: {fill: "rgb(22, 22, 22)"},
    off: {fill: "rgb(221, 221, 221)"}
  }

  return (
    <div className="header">
      <MenuButton hoverState={hoverMenu} setHoverState={setHoverMenu} clickState={menuState} setClickState={setStateMenu} background={background} iconColor={iconColor}/>
      <Points />
      <SettingsButton hoverState={hoverSettings} setHoverState={setHoverSettings} clickState={settingsState} setClickState={setStateSettings} background={background} iconColor={iconColor}/>
    </div>
  );
};

export default Header;
