import CloseButton from './menu/CloseButton'
import Navigation from './menu/Navigation'
import UpToDate from './menu/UpToDate'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { AnimationContext } from '../GlobalHooks'

const Menu = () => {
    const {
        state: { menuState, settingsState },
        dispatch,
    } = useContext(AnimationContext)
    return (
        <motion.div className="nav">
            <motion.div
                className="nav__bg"
                /* animate = {clickState}
                variants = {background}
                initial = {false}
                transition = {{duration: 0.35,  ease: "anticipate",  type: "spring", stiffness: 0}} */
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
