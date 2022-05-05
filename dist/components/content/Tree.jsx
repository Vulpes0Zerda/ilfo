import TreeHeader from './TreeHeader';
import TreeBody from './TreeBody';
import { useContext } from 'react';
import { TooltipContext } from '../../GlobalContext';
import ErrorBoundary from '../../errorHandling/ErrorBoundry';
const Tree = ({ treeClass, treeColor, treeRef, treeTraitStyle }) => {
    const { refTree } = useContext(TooltipContext);
    //TODO 9 Programming logic for Trait tree for Left/Right Click [+/- Points to traits]
    //TODO 6 Programming logic for Trait tree for Touch/- Button under tree for Mobile [+/- Points to traits]
    //TODO 10 Programming logic for JSON compiling
    //TODO 6 Programming logic for trait tree swap for mobile
    return (<div className={`tree__${treeColor} tree`} ref={refTree}>
            <ErrorBoundary>
                <TreeHeader treeClass={treeClass} treeColor={treeColor} treeRef={treeRef} treeTraitStyle={treeTraitStyle}/>
            </ErrorBoundary>
            <ErrorBoundary>
                <TreeBody treeClass={treeClass} treeColor={treeColor}/>
            </ErrorBoundary>
        </div>);
};
export default Tree;
