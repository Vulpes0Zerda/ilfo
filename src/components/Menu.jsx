import Navigation from './menu/Navigation'
import UpToDate from './menu/UpToDate'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { AnimationContext } from '../GlobalHooks'

const menuBg = {
    NONE: {
        x: '-50%',
        y: '-50%',
        left: '-5200vh',
    },
    HOVER: {
        x: '-50%',
        y: '-50%',
        scale: 1,
        left: '-5200vh',
        transition: {
            type: 'spring',
            duration: 0.2,
            bounce: 0.3,
        },
    },
    CLICK: {
        scale: 2,
        left: '-4970vh',
        x: '-50%',
        y: '-50%',
        transition: {
            type: 'spring',
            duration: 0.4,
            bounce: 0.16,
        },
    },
}

const menuBtnBg = {
    NONE: {
        width: '0vh',
        height: '0vh',
        left: '4vh',
        transition: {
            type: 'easeOut',
            duration: 0.2,
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
        <div className="nav">
            <motion.div
                className="header__btn__bg header__btn__bg--left"
                variants={menuBtnBg}
                animate={menuState}
                initial="NONE"
            ></motion.div>
            <motion.div
                className="nav__bg"
                variants={menuBg}
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
