import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import { AnimationContext } from '../GlobalContext'
import animationLookup from '../lookup/animation.json'
import Navigation from './menu/Navigation'
import UpToDate from './menu/UpToDate'

const menuBg = {
    NONE: {
        x: '0%',
        y: '-50%',
        height: '100%',
        left: '-40vw',
    },
    HOVER: {
        x: '0%',
        y: '-50%',
        height: '100%',
        left: '-40vw',
        transition: {
            type: 'spring',
            duration: 0.4,
            bounce: 0.3,
        },
    },
    CLICK: {
        x: '0%',
        y: '-50%',
        height: '100%',
        left: '0vw',
        transition: {
            type: 'spring',
            duration: 0.4,
            bounce: 0.3,
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
            duration: 0.3,
        },
    },
    HOVER: {
        width: '6vh',
        height: '6vh',
        left: '4vh',
        transition: {
            type: 'spring',
            bounce: 0.5,
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
    const { menuAnimation } = useContext(AnimationContext)
    return (
        <>
            <motion.div
                className="header__btn__bg header__btn__bg--left"
                variants={menuBtnBg}
                animate={menuAnimation.current}
                initial="NONE"
            ></motion.div>
            <AnimatePresence>
                {menuAnimation.click && (
                    <div className="nav sb">
                        <motion.div
                            className="nav__bg sb__bg"
                            key="navBg"
                            variants={menuBg}
                            animate={menuAnimation.current}
                            initial="NONE"
                            exit="HOVER"
                        >
                            <motion.nav
                                className="nav__bar sb__bar"
                                key="navBar"
                                variants={animationLookup.dialog}
                                animate={menuAnimation.current}
                                initial={false}
                                exit="NONE"
                            >
                                <Navigation />
                                <UpToDate />
                            </motion.nav>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Menu
