import MenuLogo from "./MenuLogo";
import { motion } from "framer-motion"



const MenuButton = ({ animation, setAnimation, background, iconColor }) => {
  
  return (
    <motion.button
      type="button"
      id="menu"
      // onClick = {{/*pick up here: Framer Motion Animation Variants*/}}
      onMouseEnter = {() => setAnimation(true)}
      onMouseLeave = {() => setAnimation(false)}
    >
      <motion.div
        className = "toggleButton"
        animate = {animation ? "on":"off"}
        variants = {background}
      />
      <MenuLogo animation={animation} iconColor={iconColor}/>
    </motion.button>
  );
};

export default MenuButton;
