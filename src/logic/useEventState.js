import { useState } from 'react'

const useEventState = (initState) => {
    const [_eventState, setEventState] = useState(initState)
    const eventState = setEventState((curState) => curState)
    return [eventState, setEventState]
}

export default useEventState
