import { useLayoutEffect, useRef, useState } from 'react'
import Tree from './content/Tree'
import Beorning from '../classes/Beorning.json'
import { RefContext } from '../GlobalContext'
import clientMaxSize from '../logic/clientMaxSize'
import useEventState from '../logic/useEventState'

const Content = () => {
    const refTree = useRef(null)
    const refHeaderTraitsB = useRef(null)
    const refHeaderTraitsR = useRef(null)
    const refHeaderTraitsY = useRef(null)
    const refTreeTraits = { b: refHeaderTraitsB, r: refHeaderTraitsR, y: refHeaderTraitsY }
    const treeClass = Beorning
    const [treeTraitStyle, setTreeTraitStyle] = useState(0)

    //*function for checking how many Traits (same size) fit into the trait tree header
    function getSize() {
        try {
            const maxSizeB = clientMaxSize(refHeaderTraitsB.current.children, false, true)
            const maxSizeR = clientMaxSize(refHeaderTraitsR.current.children, false, true)
            const maxSizeY = clientMaxSize(refHeaderTraitsY.current.children, false, true)
            const sizeHeaderTraits = {
                b: { ...maxSizeB },
                r: { ...maxSizeR },
                y: { ...maxSizeY },
            }
            const sizeTree = {
                height: refTree.current.clientHeight,
                width: refTree.current.clientWidth,
            }
            let gridReps = {}
            for (let idx in sizeHeaderTraits) {
                let arr = []
                const widthRes =
                    sizeTree.width -
                    parseFloat(getComputedStyle(refTree.current).padding, 10) * 2 -
                    parseFloat(getComputedStyle(refTree.current).borderWidth, 10) * 2
                let floorRes = Math.floor(widthRes / sizeHeaderTraits[idx].width)
                if (
                    //prettier-ignore
                    (floorRes - 1) * parseFloat(getComputedStyle(refTreeTraits[idx].current).gap, 10) + floorRes * sizeHeaderTraits[idx].width >= widthRes
                ) {
                    floorRes -= 1
                }
                if (floorRes < 1) {
                    floorRes = 1
                }
                if (floorRes > refTreeTraits[idx].current.children.length) {
                    floorRes = refTreeTraits[idx].current.children.length
                }
                for (let i = 0; i < floorRes; i++) {
                    arr.push('1fr')
                }
                gridReps = { ...gridReps, [idx]: { gridTemplateColumns: arr.join(' ') } }
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
        <RefContext.Provider
            value={{
                refTree,
            }}
        >
            <div className="content">
                <Tree
                    treeClass={treeClass}
                    treeColor="b"
                    treeRef={refHeaderTraitsB}
                    treeTraitStyle={treeTraitStyle}
                />
                <Tree
                    treeClass={treeClass}
                    treeColor="r"
                    treeRef={refHeaderTraitsR}
                    treeTraitStyle={treeTraitStyle}
                />
                <Tree
                    treeClass={treeClass}
                    treeColor="y"
                    treeRef={refHeaderTraitsY}
                    treeTraitStyle={treeTraitStyle}
                />
            </div>
        </RefContext.Provider>
    )
}

export default Content
