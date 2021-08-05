import MenuLogo from './MenuLogo'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { AnimationContext } from '../../GlobalHooks'

const MenuButton = () => {
    const { dispatch } = useContext(AnimationContext)
    return (
        <motion.button
            type="button"
            className="header__btn"
            onClick={() => {
                dispatch({ type: 'MENU-CLICK-TOGGLE' })
            }}
            onHoverStart={() => {
                dispatch({ type: 'MENU-HOVER-TOGGLE' })
            }}
            onHoverEnd={() => {
                dispatch({ type: 'MENU-HOVER-TOGGLE' })
            }}
            onMouseDown={() => {
                dispatch({ type: 'MENU-PRESS-SET-ON' })
            }}
            onMouseUp={() => {
                dispatch({ type: 'MENU-PRESS-SET-OFF' })
            }}
            /* onFocus={() => {
                dispatch({ type: 'MENU-FOCUS-SET-ON' })
            }}
            onBlur={() => {
                dispatch({ type: 'MENU-FOCUS-SET-OFF' })
            }}
            !Later for A11y*/
        >
            <motion.div className="header__bg" />
            <MenuLogo />
        </motion.button>
    )
}

export default MenuButton
