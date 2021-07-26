import { useContext } from 'react'
import { AnimationContext } from '../GlobalHooks'

const Content = () => {
    const {
        state: { menuState, settingsState },
    } = useContext(AnimationContext)
    return (
        <div className="content">
            <div>Menu State: {menuState}</div>
            <br />
            <div>Settings State: {settingsState}</div>
        </div>
    )
}

export default Content
