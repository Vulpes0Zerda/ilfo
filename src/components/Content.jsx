import { useContext } from 'react'
import { AnimationContext } from '../GlobalHooks'

const Content = () => {
    const {
        state: { menuHoverState, menuClickState },
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
                HOVER
            </button>
            <button
                onClick={() => {
                    dispatch({ type: 'MENU-CLICK-TOGGLE' })
                    console.log(menuClickState)
                }}
            >
                CLICK
            </button>
        </div>
    )
}

export default Content
