import Tree from './content/Tree'
import Beorning from '../classes/Beorning.json'

const Content = () => {
    const treeClass = Beorning
    return (
        <div className="content">
            <Tree treeClass={treeClass} treeColor="b" />
            <Tree treeClass={treeClass} treeColor="r" />
            <Tree treeClass={treeClass} treeColor="y" />
        </div>
    )
}

export default Content
