import MenuLogo from "./MenuLogo";

const MenuButton = () => {
  return (
    <button
      type="button"
      id="menu"
      onClick="toggleBox('nav', 'navSlide', 'navBox', '-130%')"
    >
      <MenuLogo />
    </button>
  );
};

export default MenuButton;
