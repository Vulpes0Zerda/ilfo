import CloseButton from './settings/CloseButton'
import Header from './settings/Header'
import Options from './settings/Options'
import ResetButton from "./settings/ResetButton"
import SaveButton from "./settings/SaveButton"

const Settings = () => {
    return (
        <div id="modal">
        <div id="modalSlide" class="slide">
        </div>
        <div id="modalBox">
            <CloseButton />
            <div id="modalInner">
                <Header />
                <Options />
                <SaveButton />
                <ResetButton />
            </div>
        </div>
    </div>
    )
}

export default Settings
