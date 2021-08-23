import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import { AnimationContext } from '../GlobalHooks'
import Options from './settings/Options'
import ResetButton from './settings/ResetButton'
import SaveButton from './settings/SaveButton'

const settingsBg = {
    NONE: {
        x: '0%',
        y: '-50%',
        height: '100%',
        right: '-40vw',
    },
    HOVER: {
        x: '0%',
        y: '-50%',
        height: '100%',
        right: '-40vw',
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
        right: '0vw',
        transition: {
            type: 'spring',
            duration: 0.4,
            bounce: 0.3,
        },
    },
}
const settingsBtnBg = {
    NONE: {
        width: '0vh',
        height: '0vh',
        right: '4vh',
        transition: {
            type: 'spring',
            duration: 0.3,
        },
    },
    HOVER: {
        width: '6vh',
        height: '6vh',
        right: '4vh',
        transition: {
            type: 'spring',
            bounce: 0.5,
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
        <>
            <motion.div
                className="header__btn__bg header__btn__bg--right"
                key="headerBtnSettings"
                variants={settingsBtnBg}
                animate={settingsState}
                initial="NONE"
                exit="CLICK"
            ></motion.div>
            <AnimatePresence>
                {settingsState === 'CLICK' && (
                    <div className="settings sb">
                        <motion.div
                            className="settings__bg sb__bg"
                            key="settingsBg"
                            variants={settingsBg}
                            animate={settingsState}
                            initial="NONE"
                            exit="NONE"
                        >
                            <motion.div
                                key="settingsBar"
                                className="settings__bar sb__bar noselect"
                                variants={dialog}
                                animate={settingsState}
                                initial="NONE"
                                exit="NONE"
                            >
                                <Options />
                                <div
                                    key="settingsBarButtons"
                                    className="settings__bar__buttons"
                                >
                                    <SaveButton />
                                    <ResetButton />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Settings
