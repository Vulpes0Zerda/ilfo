import { useContext } from 'react'
import { AnimationContext } from '../GlobalHooks'

const Content = () => {
    //TODO Programming logic for Trait tree for Left/Right Click [+/- Points to traits]
    //TODO Programming logic for Trait tree for Touch/- Button under tree for Mobile [+/- Points to traits]
    //TODO Programming logic for JSON compiling
    //TODO Programming logic for trait tree swap for mobile
    const {
        state: { menuState, settingsState },
    } = useContext(AnimationContext)
    return (
        <div className="content">
            {
                //TODO JSON to Trait Tree
            }
        </div>
    )
}

export default Content
