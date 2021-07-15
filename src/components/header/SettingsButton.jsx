import SettingsSvg from './SettingsSvg'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { AnimationContext } from '../../GlobalHooks'

const SettingsButton = () => {
    const { dispatch } = useContext(AnimationContext)
    return (
        <motion.button
            type="button"
            className="header__btn"
            onClick={() => {
                dispatch({ type: 'SETTINGS-CLICK-TOGGLE' })
            }}
            onHoverStart={() => {
                dispatch({ type: 'SETTINGS-HOVER-TOGGLE' })
            }}
            onHoverEnd={() => {
                dispatch({ type: 'SETTINGS-HOVER-TOGGLE' })
            }}
        >
            <SettingsSvg />
        </motion.button>
    )
}

export default SettingsButton
