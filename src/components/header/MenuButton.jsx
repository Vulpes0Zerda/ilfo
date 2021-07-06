import MenuLogo from './MenuLogo'
import { motion } from 'framer-motion'

const MenuButton = () => {
    return (
        <motion.button type="button" className="header__btn">
            <motion.div className="header__bg" />
            <MenuLogo />
        </motion.button>
    )
}

export default MenuButton
