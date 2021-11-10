import { useState } from 'react'

//*Force Rerender on Component
function useForceUpdate() {
    const [state, setState] = useState(0)
    function Update() {
        setState(state + 1)
    }
    return Update
}

export default useForceUpdate
