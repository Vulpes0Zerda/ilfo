import CloseButton from './settings/CloseButton'
import Options from './settings/Options'
import ResetButton from './settings/ResetButton'
import SaveButton from './settings/SaveButton'

const Settings = () => {
    return (
        <div className="settings">
            <CloseButton />
            <div className="settings__bar">
                <Options />
                <SaveButton />
                <ResetButton />
            </div>
            <div className="settings__bg"></div>
        </div>
    )
}

export default Settings
