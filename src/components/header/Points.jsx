import { useContext, useRef } from 'react'
import { PointContext, LevelContext } from '../../GlobalContext'

const Points = () => {
    const { currentPoints, dispatchCurrentPoints, maxPoints, dispatchMaxPoints } =
        useContext(PointContext)
    const { level } = useContext(LevelContext)
    const maxPointsRef = useRef()
    return (
        <div
            className="header__pts"
            onClick={() => {
                maxPointsRef.current.focus()
            }}
        >
            <span>{currentPoints.sum}</span>
            <span>{' / '}</span>
            <input
                value={maxPoints.change}
                type={'string'}
                ref={maxPointsRef}
                onBlur={(e) => {
                    dispatchMaxPoints({
                        type: 'SET',
                        payload: { e: e, lvl: level.set },
                    })
                    dispatchCurrentPoints({
                        type: 'CLEAR', //change that to a diffrent type
                    })
                }}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        e.target.blur()
                    }
                }}
                onChange={(e) => {
                    dispatchMaxPoints({
                        type: 'CHANGE',
                        payload: { e: e },
                    })
                }}
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            />
        </div>
    )
}

export default Points
