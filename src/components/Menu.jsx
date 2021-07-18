import Navigation from './menu/Navigation'
import UpToDate from './menu/UpToDate'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { AnimationContext } from '../GlobalHooks'

const Menu = () => {
    const {
        state: { menuState },
        dialog,
        menuBg,
        menuBtnState,
    } = useContext(AnimationContext)
    return (
        <div className="nav">
            <motion.div
                className="header__btn__bg header__btn__bg--left"
                variants={menuBg}
                animate={menuState}
                initial="NONE"
            ></motion.div>
            <motion.div
                className="nav__bg"
                variants={menuBtnBg}
                animate={menuState}
                initial="NONE"
            ></motion.div>
            <motion.nav
                className="nav__bar"
                variants={dialog}
                animate={menuState}
                initial="NONE"
            >
                <Navigation />
                <UpToDate />
            </motion.nav>
        </div>
    )
}

export default Menu
