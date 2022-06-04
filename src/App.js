import Header from './components/Header'
import Content from './components/Content'
import Menu from './components/Menu'
import Settings from './components/Settings'
import Tooltip from './components/Tooltip'
import Warning from './components/Warning'
import Notification from './components/Notification'
import { useReducer, useEffect } from 'react'
import {
    AnimationContext,
    LanguageContext,
    PointContext,
    LevelContext,
    TooltipContext,
    PopUpContext,
} from './GlobalContext'
import pointsLookup from './lookup/points.json'
import languagesLookup from './lookup/languages.json'
import translation from './lang/English.json'
import {
    handleCurrentPoints,
    handleMaxPoints,
    handleLevel,
    handleLanguage,
    handleAnimation,
    handleTooltip,
    handleWarning,
    handleError,
} from './logic/reducer/handlers'
import {
    maxPointsBlueprint,
    currentPointsBlueprint,
    languageBlueprint,
    levelBlueprint,
    animationBlueprint,
    warningBlueprint,
    errorBlueprint,
} from './logic/reducer/blueprints'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const App = () => {
    const [menuAnimation, dispatchMenuAnimation] = useReducer(handleAnimation, animationBlueprint)
    const [settingsAnimation, dispatchSettingsAnimation] = useReducer(
        handleAnimation,
        animationBlueprint,
    )
    const [language, dispatchLanguage] = useReducer(handleLanguage, languageBlueprint())
    const [level, dispatchLevel] = useReducer(handleLevel, levelBlueprint())
    const [maxPoints, dispatchMaxPoints] = useReducer(handleMaxPoints, maxPointsBlueprint())
    const [currentPoints, dispatchCurrentPoints] = useReducer(
        handleCurrentPoints,
        currentPointsBlueprint(),
    )
    const [tooltip, dispatchTooltip] = useReducer(handleTooltip, null)
    const [warning, dispatchWarning] = useReducer(handleWarning, warningBlueprint)
    const [error, dispatchError] = useReducer(handleError, errorBlueprint)
    useEffect(() => {
        localStorage.setItem('language', language)
    }, [language])
    useEffect(() => {
        localStorage.setItem('level', level.set)
    }, [level.set])
    useEffect(() => {
        localStorage.setItem('maxPoints', maxPoints.set)
    }, [maxPoints.set])
    useEffect(() => {
        localStorage.setItem('currentPoints', JSON.stringify(currentPoints))
    }, [currentPoints])
    useEffect(() => {
        dispatchMaxPoints({ type: 'INITIALIZE', payload: { lvl: level.set } })
    }, [])
    return (
        <div className="App">
            <Provider store={store}>
                <LevelContext.Provider value={{ level, dispatchLevel }}>
                    <PointContext.Provider
                        value={{
                            currentPoints,
                            dispatchCurrentPoints,
                            maxPoints,
                            dispatchMaxPoints,
                            pointsLookup,
                        }}
                    >
                        <PopUpContext.Provider
                            value={{ warning, dispatchWarning, error, dispatchError }}
                        >
                            <LanguageContext.Provider
                                value={{ language, languagesLookup, dispatchLanguage, translation }}
                            >
                                <AnimationContext.Provider
                                    value={{
                                        menuAnimation,
                                        dispatchMenuAnimation,
                                        settingsAnimation,
                                        dispatchSettingsAnimation,
                                    }}
                                >
                                    <Menu />
                                    <Settings />
                                    <Header />
                                </AnimationContext.Provider>
                                <TooltipContext.Provider value={{ tooltip, dispatchTooltip }}>
                                    <Content />
                                    {(tooltip &&
                                    ((tooltip.trait && tooltip.trait.effect[0]) ||
                                        (tooltip.skill && tooltip.skill.name))
                                        ? true
                                        : false) && <Tooltip path={tooltip} />}
                                </TooltipContext.Provider>
                                <Notification />
                                <Warning />
                            </LanguageContext.Provider>
                        </PopUpContext.Provider>
                    </PointContext.Provider>
                </LevelContext.Provider>
            </Provider>
        </div>
    )
}

export default App
