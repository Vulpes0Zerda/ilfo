import PrintElement from './PrintElement'

class MapElement extends PrintElement {
    constructor(props) {
        super(props)
    }
    render() {
        const Tag = this.state.tag
        if (Array.isArray(this.state.path)) {
            return (
                <div>
                    {this.state.path.map((p, idx) =>
                        p ? <Tag key={idx}>{p}</Tag> : <br key={idx} />,
                    )}
                </div>
            )
        } else if (this.state.path) {
            return <Tag>{this.state.path}</Tag>
        } else {
            return <></>
        }
    }
}

export default MapElement
