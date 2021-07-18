import MenuLogo from './MenuLogo'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { AnimationContext } from '../../GlobalHooks'

const MenuButton = () => {
    const { dispatch, menuBtnBg, menuState } = useContext(AnimationContext)
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
        >
            <motion.div className="header__bg" />
            <MenuLogo />
        </motion.button>
    )
}

export default MenuButton
