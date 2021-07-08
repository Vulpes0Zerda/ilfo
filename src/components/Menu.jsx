import CloseButton from './menu/CloseButton'
import Navigation from './menu/Navigation'
import UpToDate from './menu/UpToDate'
import { motion } from 'framer-motion'
import { useContext, useEffect } from 'react'
import { AnimationContext } from '../GlobalHooks'

const Menu = () => {
    const {
        state: { background, menuState },
        dispatch,
    } = useContext(AnimationContext)
    console.log(background)
    return (
        <motion.div className="nav">
            <motion.div
                className="nav__bg"
                variants={background}
                animate="HOVER"
                initial="NONE"
            >
                <motion.nav className="nav__bar">
                    <CloseButton />
                    <Navigation />
                    <UpToDate />
                </motion.nav>
            </motion.div>
        </motion.div>
    )
}

export default Menu
