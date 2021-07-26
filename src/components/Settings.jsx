import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import { AnimationContext } from '../GlobalHooks'
import Options from './settings/Options'
import ResetButton from './settings/ResetButton'
import SaveButton from './settings/SaveButton'

const settingsBg = {
    NONE: {
        x: '50%',
        y: '-50%',
        scale: 1,
        right: '-5200vh',
    },
    HOVER: {
        x: '50%',
        y: '-50%',
        scale: 1,
        right: '-5200vh',
        transition: {
            type: 'spring',
            duration: 0.2,
            bounce: 0.3,
        },
    },
    CLICK: {
        scale: 2,
        right: '-4960vh',
        x: '50%',
        y: '-50%',
        transition: {
            type: 'spring',
            damping: 30,
            mass: 1,
            stiffness: 300,
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
        <AnimatePresence>
            <motion.div
                className="header__btn__bg header__btn__bg--right"
                key="headerBtnSettings"
                variants={settingsBtnBg}
                animate={settingsState}
                initial="NONE"
                exit="CLICK"
            ></motion.div>
            {settingsState === 'CLICK' && (
                <div className="settings">
                    <motion.div
                        className="settings__bg"
                        key="settingsBg"
                        variants={settingsBg}
                        animate={settingsState}
                        initial="NONE"
                        exit="NONE"
                    ></motion.div>
                    <motion.div
                        key="settingsBar"
                        className="settings__bar"
                        variants={dialog}
                        animate={settingsState}
                        initial="NONE"
                        exit="NONE"
                    >
                        <Options />
                        <SaveButton />
                        <ResetButton />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default Settings
