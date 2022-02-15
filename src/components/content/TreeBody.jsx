import Traits from './Traits'
const TreeBody = ({ treeClass, treeColor }) => {
    return (
        <div className="tree__body">
            <div className="tree__body__traits tree__body__traits--passiv">
                <Traits path={treeClass[treeColor].traits.passiv} />
            </div>
            <div className="tree__body__traits tree__body__traits--activ">
                <Traits path={treeClass[treeColor].traits.activ} />
            </div>
        </div>
    )
}

export default TreeBody
