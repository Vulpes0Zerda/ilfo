import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Settings from './components/Settings'
import { useReducer } from 'react'
import { AnimationContext } from './GlobalHooks'

const initialState = {
    menuState: 'NONE',
    menuHoverState: false,
    menuClickState: false,
    settingsState: 'NONE',
    settingsHoverState: false,
    settingsClickState: false,
}

const dialog = {
    NONE: { opacity: 0 },
    HOVER: { opacity: 0 },
    CLICK: { opacity: 1 },
}
const iconFill = {
    NONE: { fill: 'rgb(221, 221, 221)' },
    HOVER: { fill: 'rgb(22, 22, 22)' },
    CLICK: { fill: 'rgb(22, 22, 22)' },
}

function animationReducer(state, action) {
    switch (action.type) {
        case 'MENU-HOVER-TOGGLE':
            return {
                ...state,
                menuHoverState: !state.menuHoverState,
                menuState: !state.menuClickState
                    ? state.menuHoverState
                        ? (state.menuState = 'NONE')
                        : (state.menuState = 'HOVER')
                    : state.menuState,
            }
        case 'MENU-CLICK-TOGGLE':
            return {
                ...state,
                menuClickState: !state.menuClickState,
                menuState: !state.menuClickState
                    ? (state.menuState = 'CLICK')
                    : state.menuHoverState
                    ? (state.menuState = 'HOVER')
                    : (state.menuState = 'NONE'),
            }
        case 'SETTINGS-HOVER-TOGGLE':
            return {
                ...state,
                settingsHoverState: !state.settingsHoverState,
                settingsState: !state.settingsClickState
                    ? state.settingsHoverState
                        ? (state.settingsState = 'NONE')
                        : (state.settingsState = 'HOVER')
                    : state.settingsState,
            }
        case 'SETTINGS-CLICK-TOGGLE':
            return {
                ...state,
                settingsClickState: !state.settingsClickState,
                settingsState: !state.settingsClickState
                    ? (state.settingsState = 'CLICK')
                    : state.settingsHoverState
                    ? (state.settingsState = 'HOVER')
                    : (state.settingsState = 'NONE'),
            }
        default:
            return state
    }
    //! Still needs Focus state
    //With case 'XYZ-FOCUS-TOGGLE'
}

const App = () => {
    const [state, dispatch] = useReducer(animationReducer, initialState)
    return (
        <div className="App">
            <AnimationContext.Provider
                value={{
                    state,
                    dispatch,
                    dialog,
                    iconFill,
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
