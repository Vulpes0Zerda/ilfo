import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Settings from './components/Settings'
import { useReducer } from 'react'
import { AnimationContext } from './GlobalHooks'

const initialState = {
    menuState: 'NONE',
    settingsState: 'NONE',
}

function animationReducer(state, action) {
    switch (action.type) {
        case 'MENU-NONE':
            return {
                ...state,
                menuState:
                    state.menuState !== 'CLICK'
                        ? (state.menuState = 'NONE')
                        : state.menuState,
            }
        case 'MENU-HOVER':
            return {
                ...state,
                menuState:
                    state.menuState !== 'CLICK'
                        ? (state.menuState = 'HOVER')
                        : state.menuState,
            }
        case 'MENU-CLICK':
            return { ...state, menuState: (state.menuState = 'CLICK') }
        case 'MENU-CLOSE':
            return { ...state, menuState: (state.menuState = 'NONE') }
        case 'SETTINGS-NONE':
            return {
                ...state,
                settingsState:
                    state.settingsState !== 'CLICK'
                        ? (state.settingsState = 'NONE')
                        : state.settingsState,
            }
        case 'SETTINGS-HOVER':
            return {
                ...state,
                settingsState:
                    state.settingsState !== 'CLICK'
                        ? (state.settingsState = 'HOVER')
                        : state.settingsState,
            }
        case 'SETTINGS-CLICK':
            return { ...state, settingsState: (state.settingsState = 'CLICK') }
        case 'SETTINGS-CLOSE':
            return { ...state, settingsState: (state.settingsState = 'NONE') }
        default:
            return state
    }
}

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
