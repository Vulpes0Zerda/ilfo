import React from 'react'
import ActivTrait from './ActivTrait'
import Trait from './Trait'

class Traits extends React.Component {
    constructor(props) {
        super(props)
        this.state = { path: props.path }
    }

    render() {
        if (Array.isArray(this.state.path)) {
            return this.state.path.map((p) => {
                return typeof p.ranks !== 'undefined' ? <ActivTrait path={p} /> : <Trait path={p} />
            })
        } else if (this.state.path.name) {
            return typeof this.state.path.ranks !== 'undefined' ? (
                <ActivTrait path={this.state.path} />
            ) : (
                <Trait path={this.state.path} />
            )
        } else {
            return <></>
        }
    }
}

export default Traits
