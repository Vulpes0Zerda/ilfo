import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Settings from './components/Settings'
import { useReducer } from 'react'
import { AnimationContext } from './GlobalHooks'

const initialState = {
    menuHoverState: false,
    menuClickState: false,
    settingsHoverState: false,
    settingsClickState: false,
}

function animationReducer(state, action) {
    switch (action.type) {
        case 'MENU-HOVER-TOGGLE':
            return {
                ...state,
                menuHoverState: !state.menuHoverState,
            }
        case 'MENU-CLICK-TOGGLE':
            return { ...state, menuClickState: !state.menuClickState }
        case 'SETTINGS-HOVER-TOGGLE':
            return {
                ...state,
                settingsHoverState: !state.settingsHoverState,
            }
        case 'SETTINGS-CLICK-TOGGLE':
            return { ...state, settingsClickState: !state.settingsClickState }
        default:
            return state
    }
}

/* const  */

const App = () => {
    const [state, dispatch] = useReducer(animationReducer, initialState)

    return (
        <div className="App">
            <AnimationContext.Provider
                value={{
                    state,
                    dispatch,
                }}
            >
                <Menu />
                <Settings />
                <Header />
                <Content />
                <Footer />
            </AnimationContext.Provider>
        </div>
    )
}

export default App
