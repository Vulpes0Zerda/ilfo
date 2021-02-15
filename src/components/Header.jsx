import MenuButton from "./header/MenuButton";
import Points from "./header/Points";
import SettingsButton from "./header/SettingsButton";
import { useState } from "react";

const Header = () => {
  const [isOn, setIsOn] = useState(false)
  //need new isOn State for settings Button (both buttons fire simultaneously [BUG])
  const background = {
    on: {height: '90%', width: '90%'},
    off: {height: '0%', width: '0%'}
  }
  
  const iconColor = {
    on: {fill: "rgb(22, 22, 22)"},
    off: {fill: "rgb(221, 221, 221)"}
  }

  return (
    <div id="header">
      <MenuButton animation={isOn} setAnimation = {setIsOn} background={background} iconColor={iconColor}/>
      <Points />
      <SettingsButton animation={isOn} setAnimation = {setIsOn} background={background} iconColor={iconColor}/>
    </div>
  );
};

export default Header;
