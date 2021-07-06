import { useContext } from 'react'
import { AnimationContext } from '../GlobalHooks'

const Content = () => {
    const { state, dispatch } = useContext(AnimationContext)
    return (
        <div>
            <div>{state.menuState}</div>
            <div>{state.settingsState}</div>
            <button
                onClick={() => {
                    console.log(state.menuState)
                    switch (state.menuState) {
                        case 'MENU-NONE':
                            return dispatch({
                                type: 'MENU-HOVER',
                            })
                        case 'MENU-HOVER':
                            return dispatch({
                                type: 'MENU-CLICK',
                            })
                        case 'MENU-CLICK':
                            return dispatch({
                                type: 'MENU-NONE',
                            })
                        default:
                            return state.menuState
                    }
                }}
            >
                Cycle Menu State
            </button>
            <button
                onClick={() => {
                    switch (state.settingsState) {
                        case 'SETTINGS-NONE':
                            return dispatch({
                                type: 'SETTINGS-HOVER',
                            })
                        case 'SETTINGS-HOVER':
                            return dispatch({
                                type: 'SETTINGS-CLICK',
                            })
                        case 'SETTINGS-CLICK':
                            return dispatch({
                                type: 'SETTINGS-NONE',
                            })
                        default:
                            return state.settingsState
                    }
                }}
            >
                Cycle Settings State
            </button>
        </div>
    )
}

export default Content
