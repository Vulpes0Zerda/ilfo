import MenuButton from './header/MenuButton'
import Points from './header/Points'
import SettingsButton from './header/SettingsButton'
import { useContext } from 'react'
import { AnimationContext } from '../GlobalHooks'

const Header = () => {
    const {
        state: { menuState, settingsState },
        dispatch,
    } = useContext(AnimationContext)
    return (
        <div className="header">
            <MenuButton />
            <Points />
            <SettingsButton />
        </div>
    )
}

export default Header
