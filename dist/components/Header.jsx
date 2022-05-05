import MenuButton from './header/MenuButton';
import Points from './header/Points';
import SettingsButton from './header/SettingsButton';
const Header = () => {
    return (<div className="header">
            <MenuButton />
            <Points />
            <SettingsButton />
        </div>);
};
export default Header;
