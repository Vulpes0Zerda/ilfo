import { useState, useRef } from 'react'

/* doesn't do anything if you setEventState inside of the eventhandler (bcs the event handler can't talk to the function outside of itself)*/
const useEventState = (initState) => {
    const [_eventState, _setEventState] = useState(initState)
    const eventState = useRef(_eventState)
    const setEventState = (newState) => {
        eventState.current = newState
        _setEventState(newState)
    }
    return [eventState.current, setEventState]
}

export default useEventState
