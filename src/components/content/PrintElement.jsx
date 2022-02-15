import React from 'react'

class PrintElement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            path: this.props.path,
            tag: this.props.tag,
        }
    }
    render() {
        const Tag = this.state.tag
        if (this.state.path) {
            return <Tag>{this.state.path}</Tag>
        } else {
            return <></>
        }
    }
}

export default PrintElement
