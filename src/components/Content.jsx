import { useContext } from 'react'
import { AnimationContext } from '../GlobalHooks'

const Content = () => {
    const {
        state: { menuState, menuHoverState, menuClickState },
        dispatch,
    } = useContext(AnimationContext)
    return (
        <div>
            <button
                onClick={() => {
                    dispatch({ type: 'MENU-HOVER-TOGGLE' })
                    console.log(menuHoverState)
                }}
            >
                {menuState}
            </button>
            <button
                onClick={() => {
                    dispatch({ type: 'MENU-CLICK-TOGGLE' })
                    console.log(menuClickState)
                }}
            >
                {menuState}
            </button>
        </div>
    )
}

export default Content
