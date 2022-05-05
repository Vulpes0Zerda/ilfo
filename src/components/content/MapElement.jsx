import React from 'react'

class MapElement extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const Tag = this.props.tag
        if (Array.isArray(this.props.path)) {
            return (
                <div>
                    {this.props.path.map((p, idx) =>
                        p ? <Tag key={idx}>{p}</Tag> : <br key={idx} />,
                    )}
                </div>
            )
        } else if (this.props.path) {
            return <Tag>{this.props.path}</Tag>
        } else {
            return <></>
        }
    }
}

export default MapElement
