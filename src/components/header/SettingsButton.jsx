import SettingsSvg from "./SettingsSvg";
import { motion } from "framer-motion"

const SettingsButton = ({ animation, setAnimation, background, iconColor }) => {
  return (
    <motion.button
      type="button"
      id="settings"
      // onClick=""
      onMouseEnter = {() => setAnimation(true)}
      onMouseLeave = {() => setAnimation(false)}
    >
      <motion.div
        className = "toggleButton"
        animate = {animation ? "on":"off"}
        variants = {background}
        //white point still visible (with and height never reach 0) -> make it invis or select different ease effect
      />
      <SettingsSvg animation={animation} iconColor={iconColor}/>
    </motion.button>
  );
};

export default SettingsButton;
