import Trait from './Trait'

class ActivTrait extends Trait {
    constructor(props) {
        super(props)
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
                    <div>{`${this.state.path.ranks} / ${this.state.path.ranks}`}</div>
                </div>
            )
        } else {
            return <div className="tree__body__trait" key={this.state.path.id} />
        }
    }
}
export default ActivTrait
