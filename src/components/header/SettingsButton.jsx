import SettingsSvg from "./SettingsSvg";
import { motion } from "framer-motion"

const SettingsButton = ({ hoverState, setHoverState, clickState, setClickState, background, iconColor }) => {
  return (
    <motion.button
      type="button"
      className="header__dialogBtn"
      onClick = {() => {clickState ? setClickState(false) : setClickState(true)}}
      onMouseEnter = {() => setHoverState(true)}
      onMouseLeave = {() => setHoverState(false)}
    >
      <motion.div
        className = "toggleButton"
        animate = {hoverState || clickState ? "on" : "off"}
        variants = {background}
        initial = {false}
        transition = {{times: [0, 0.01, 0.99, 1], duration: 0.35, ease: "anticipate", type: "spring", stiffness: 0}}
      />
      <SettingsSvg hoverState={hoverState} iconColor={iconColor} clickState={clickState}/>
    </motion.button>
  );
};

export default SettingsButton;
