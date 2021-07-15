import { motion } from 'framer-motion'
import { useContext } from 'react'
import { AnimationContext } from '../GlobalHooks'
import Options from './settings/Options'
import ResetButton from './settings/ResetButton'
import SaveButton from './settings/SaveButton'

const Settings = () => {
    const {
        state: { settingsState },
        dialog,
        settingsBg,
    } = useContext(AnimationContext)
    return (
        <div className="settings">
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
