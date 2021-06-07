import MenuLogo from "./MenuLogo";
import { motion } from "framer-motion"


const MenuButton = ({ hoverState, setHoverState, clickState, setClickState, background, iconColor }) => {
  return (
    <motion.button
      type="button"
      className="header__btn"
      onClick = {() => {clickState ? setClickState(false) : setClickState(true)}}
      onMouseOver = {() => setHoverState(true)}
      onMouseLeave = {() => setHoverState(false)}
    >
      <motion.div
        className = "header__bg"
        animate = {clickState || hoverState ? "on" : "off" }
        variants = {background}
        initial = {false}
        transition = {{duration: 0.35,/*  ease: "anticipate", */ type: "spring", stiffness: 0}}
      />
      <MenuLogo hoverState={hoverState} clickState={clickState} iconColor={iconColor} />
    </motion.button>
  );
};

export default MenuButton;
