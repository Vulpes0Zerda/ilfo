import React from 'react'
import Traits from './Traits'
import PrintElement from './PrintElement'
import MapElement from './MapElement'

class TreeHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            treeClass: props.treeClass,
            treeColor: props.treeColor,
            treeRef: props.treeRef,
            treeTraitStyle: props.treeTraitStyle,
        }
    }

    render() {
        return (
            <div className="tree__header">
                <div className="tree__header__titel">
                    <PrintElement
                        path={this.state.treeClass[this.state.treeColor].information.header.name}
                        tag={'p'}
                    />
                    <MapElement
                        path={this.state.treeClass[this.state.treeColor].information.header.role}
                        tag={'p'}
                    />
                </div>
                <div className="tree__header__content">
                    <MapElement
                        path={
                            this.state.treeClass[this.state.treeColor].information.header
                                .explanation.short
                        }
                        tag={'p'}
                    />
                    <MapElement
                        path={
                            this.state.treeClass[this.state.treeColor].information.header
                                .explanation.long
                        }
                        tag={'p'}
                    />
                    <MapElement
                        path={this.state.treeClass[this.state.treeColor].information.header.passiv}
                        tag={'p'}
                    />
                    {this.state.treeClass[this.state.treeColor].traits.header.name ||
                    this.state.treeClass[this.state.treeColor].traits.header[0].name ? (
                        <div className="tree__header__traits__titel">
                            You will gain these skills by specialising in this tree:
                        </div>
                    ) : (
                        ''
                    )}
                    <div
                        className="tree__header__traits"
                        ref={this.state.treeRef}
                        style={this.state.treeTraitStyle[this.state.treeColor]}
                    >
                        <Traits path={this.state.treeClass[this.state.treeColor].traits.header} />
                    </div>
                </div>
            </div>
        )
    }
}

export default TreeHeader
