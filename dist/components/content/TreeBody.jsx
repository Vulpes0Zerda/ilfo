import Traits from './Traits';
function handleHover() { }
const TreeBody = ({ treeClass, treeColor }) => {
    return (<div className="tree__body" onContextMenu={(e) => {
            e.preventDefault();
        }}>
            <div className="tree__body__traits tree__body__traits--passiv" key="passiv">
                <Traits path={treeClass.tree[treeColor].traits.passiv} color={treeColor}/>
            </div>
            <div className="tree__body__traits tree__body__traits--activ" key="activ">
                <Traits path={treeClass.tree[treeColor].traits.activ} color={treeColor}/>
            </div>
        </div>);
};
export default TreeBody;
