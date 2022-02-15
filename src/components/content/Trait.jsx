import React from 'react'

class Trait extends React.Component {
    constructor(props) {
        super(props)
        this.state = { path: props.path }
    }
    get activ() {
        if (this.state.activ) {
            return <span>{`${this.state.path.ranks} / ${this.state.path.ranks}`}</span>
        } else {
            return ''
        }
    }
    render() {
        if (this.state.path.name) {
            return (
                <div className="tree__body__trait" key={this.state.path.id}>
                    <div className="tree__body__trait__imgSizing">
                        <img
                            className="tree__body__trait__img"
                            src={this.state.path.picture}
                            alt={this.state.path.name}
                        />
                    </div>
                    <div className="tree__body__trait__name">{this.state.path.name}</div>
                </div>
            )
        } else {
            return <div className="tree__body__trait" key={this.state.path.id} />
        }
    }
}

export default Trait
