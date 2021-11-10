import { useState, useRef } from 'react'

//*Keeps track of the state of a function called from a eventhandler or other non
const useEventState = (initState) => {
    const [_eventState, _setEventState] = useState(initState)
    const eventState = useRef(_eventState)
    const setEventState = (updatedState) => {
        eventState.current = updatedState
        _setEventState(updatedState)
    }
    //User needs to call eventState.current bcs current has to be called live to get newest result
    //TODO: Figure out a way to get .current called live without having to call a function
    return [eventState, setEventState]
}

export default useEventState
