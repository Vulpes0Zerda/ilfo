import { useLayoutEffect, useContext, useRef, useState } from 'react'
import Tree from './content/Tree'
import Beorning from '../classes/Beorning.json'
import maxElementSize from '../logic/maxElementSize'
import { TooltipContext } from '../GlobalContext'

import ErrorBoundary from '../errorHandling/ErrorBoundry'

const Content = () => {
    const refTree = useRef(null)
    const refHeaderTraits = useRef({ b: {}, r: {}, y: {} })
    const treeClass = Beorning
    const [treeTraitStyle, setTreeTraitStyle] = useState({})
    const { tooltip } = useContext(TooltipContext)
    //*function for checking how many Traits (same size) fit into the trait tree header
    //Output: A string which can be inserted into a react style attribute
    function getSize() {
        try {
            //TODO: Loop this when refHeaderTraits is cleaned up
            let sizeHeaderTraits = {}
            for (let i in refHeaderTraits.current) {
                sizeHeaderTraits = {
                    ...sizeHeaderTraits,
                    [i]: new maxElementSize(refHeaderTraits.current[i].children),
                }
            }
            const sizeTree = new maxElementSize(refTree.current)
            let gridReps = {}
            for (let i in sizeHeaderTraits) {
                let arr = []
                const widthRes =
                    sizeTree.width -
                    parseFloat(getComputedStyle(refTree.current).padding, 10) * 2 -
                    parseFloat(getComputedStyle(refTree.current).borderWidth, 10) * 2
                let floorRes = Math.floor(widthRes / sizeHeaderTraits[i].width)
                if (
                    //prettier-ignore
                    (floorRes - 1) * parseFloat(getComputedStyle(refHeaderTraits.current[i]).gap, 10) + floorRes * sizeHeaderTraits[i].width >= widthRes
                ) {
                    floorRes -= 1
                }
                if (floorRes < 1) {
                    floorRes = 1
                }
                if (floorRes > refHeaderTraits.current[i].children.length) {
                    floorRes = refHeaderTraits.current[i].children.length
                }
                for (let j = 0; j < floorRes; j++) {
                    arr.push('1fr')
                }
                //TODO: fill in padding if maxWidth * refTree.length < width is
                gridReps = { ...gridReps, [i]: { gridTemplateColumns: arr.join(' ') } }
            }
            setTreeTraitStyle(gridReps)
        } catch (err) {
            console.log(err)
        }
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', getSize)
        return () => {
            window.removeEventListener('resize', getSize)
        }
    })

    useLayoutEffect(() => {
        getSize()
    }, [])

    return (
        <div className="content">
            <ErrorBoundary>
                <Tree
                    treeClass={treeClass}
                    treeColor="b"
                    treeRef={refHeaderTraits}
                    treeTraitStyle={treeTraitStyle}
                />
            </ErrorBoundary>
            <ErrorBoundary>
                <Tree
                    treeClass={treeClass}
                    treeColor="r"
                    treeRef={refHeaderTraits}
                    treeTraitStyle={treeTraitStyle}
                />
            </ErrorBoundary>
            <ErrorBoundary>
                <Tree
                    treeClass={treeClass}
                    treeColor="y"
                    treeRef={refHeaderTraits}
                    treeTraitStyle={treeTraitStyle}
                />
            </ErrorBoundary>
        </div>
    )
}

export default Content
