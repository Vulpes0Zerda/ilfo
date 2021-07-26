import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import { AnimationContext } from '../GlobalHooks'
import Navigation from './menu/Navigation'
import UpToDate from './menu/UpToDate'

const menuBg = {
    NONE: {
        x: '-50%',
        y: '-50%',
        scale: 1,
        left: '-5050vh',
    },
    HOVER: {
        x: '-50%',
        y: '-50%',
        scale: 1,
        left: '-5050vh',
        transition: {
            type: 'spring',
            duration: 2,
            bounce: 0,
        },
    },
    CLICK: {
        scale: 2,
        left: '-4960vh',
        x: '-50%',
        y: '-50%',
        transition: {
            type: 'spring',
            duration: 0.3,
            bounce: 0,
            /*             damping: 30,
            mass: 1,
            stiffness: 300, */
        },
    },
}

const menuBtnBg = {
    NONE: {
        width: '0vh',
        height: '0vh',
        left: '4vh',
        transition: {
            type: 'spring',
            duration: 0.25,
        },
    },
    HOVER: {
        width: '6vh',
        height: '6vh',
        left: '4vh',
        transition: {
            type: 'spring',
            bounce: 0.6,
            duration: 0.4,
        },
    },
    CLICK: {
        width: '6vh',
        height: '6vh',
        left: '-10vh',
        transition: {
            type: 'spring',
            bounce: 0.6,
            duration: 0.4,
        },
    },
}

const Menu = () => {
    const {
        state: { menuState },
        dialog,
    } = useContext(AnimationContext)
    return (
        <AnimatePresence>
            {menuState === 'HOVER' && (
                <motion.div
                    className="header__btn__bg header__btn__bg--left"
                    key="headerBtnMenu"
                    variants={menuBtnBg}
                    animate={menuState}
                    initial={false}
                    exit="CLICK"
                ></motion.div>
            )}
            {menuState === 'CLICK' && (
                <div className="nav">
                    <motion.div
                        className="nav__bg"
                        key="navBg"
                        variants={menuBg}
                        animate={menuState}
                        initial="NONE"
                        exit="HOVER"
                    ></motion.div>
                    <motion.nav
                        className="nav__bar"
                        key="navBar"
                        variants={dialog}
                        animate={menuState}
                        initial={false}
                        exit="NONE"
                    >
                        <Navigation />
                        <UpToDate />
                    </motion.nav>
                </div>
            )}
        </AnimatePresence>
    )
}

export default Menu
