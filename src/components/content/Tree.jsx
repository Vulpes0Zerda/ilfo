import TreeHeader from './TreeHeader'
import TreeBody from './TreeBody'
import { useContext } from 'react'
import { RefContext } from '../../GlobalContext'

const Tree = ({ treeClass, treeColor, treeRef }) => {
    const { refTree } = useContext(RefContext)
    //TODO 9 Programming logic for Trait tree for Left/Right Click [+/- Points to traits]
    //TODO 6 Programming logic for Trait tree for Touch/- Button under tree for Mobile [+/- Points to traits]
    //TODO 10 Programming logic for JSON compiling
    //TODO 6 Programming logic for trait tree swap for mobile

    return (
        <div className={`tree__${treeColor} tree`} ref={refTree}>
            <TreeHeader
                treeClass={treeClass}
                treeColor={treeColor}
                treeRef={treeRef}
            />
            <TreeBody treeClass={treeClass} treeColor={treeColor} />
        </div>
    )
}

export default Tree
