import { motion } from 'framer-motion'
import { useContext } from 'react'
import { AnimationContext } from '../GlobalHooks'
import Options from './settings/Options'
import ResetButton from './settings/ResetButton'
import SaveButton from './settings/SaveButton'

const settingsBg = {
    NONE: {
        width: '0vh',
        height: '0vh',
        right: '4vh',
        transition: {
            type: 'easeOut',
            duration: 0.2,
        },
    },
    HOVER: {
        width: '6vh',
        height: '6vh',
        right: '4vh',
        transition: {
            type: 'spring',
            bounce: 0.6,
            duration: 0.4,
        },
    },
    CLICK: {
        width: '6vh',
        height: '6vh',
        right: '-10vh',
        transition: {
            type: 'spring',
            bounce: 0.6,
            duration: 0.4,
        },
    },
}

const settingsBtnBg = {
    NONE: {
        width: '0vh',
        height: '0vh',
        right: '4vh',
        transition: {
            type: 'easeOut',
            duration: 0.2,
        },
    },
    HOVER: {
        width: '6vh',
        height: '6vh',
        right: '4vh',
        transition: {
            type: 'spring',
            bounce: 0.6,
            duration: 0.4,
        },
    },
    CLICK: {
        width: '6vh',
        height: '6vh',
        right: '-10vh',
        transition: {
            type: 'spring',
            bounce: 0.6,
            duration: 0.4,
        },
    },
}

const Settings = () => {
    const {
        state: { settingsState },
        dialog,
    } = useContext(AnimationContext)
    return (
        <div className="settings">
            <motion.div
                className="header__btn__bg header__btn__bg--right"
                variants={settingsBtnBg}
                animate={settingsState}
                initial="NONE"
            ></motion.div>
            <motion.div
                className="settings__bg"
                variants={settingsBg}
                animate={settingsState}
                initial="NONE"
            ></motion.div>
            <motion.div
                className="settings__bar"
                variants={dialog}
                animate={settingsState}
                initial="NONE"
            >
                <Options />
                <SaveButton />
                <ResetButton />
            </motion.div>
        </div>
    )
}

export default Settings
