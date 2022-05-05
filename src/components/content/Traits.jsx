import React from 'react'
import Trait from './Trait'

const Traits = ({ path, color }) => {
    function render() {
        if (Array.isArray(path)) {
            return path.map((p, idx) => {
                return <Trait path={p} color={color} idx={idx} />
            })
        } else if (path.name) {
            return <Trait path={path} color={color} idx={0} />
        } else {
            return <></>
        }
    }

    return render()
}

export default Traits
