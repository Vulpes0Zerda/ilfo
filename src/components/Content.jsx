import { useLayoutEffect, useRef, useState } from 'react'
import Tree from './content/Tree'
import Beorning from '../classes/Beorning.json'
import { RefContext } from '../GlobalContext'
import clientMaxSize from '../logic/clientMaxSize'
import Tooltip from '../components/Tooltip'
import ErrorBoundary from '../errorHandling/ErrorBoundry'

const Content = () => {
    const refTree = useRef(null)
    const refHeaderTraitsB = useRef(null)
    const refHeaderTraitsR = useRef(null)
    const refHeaderTraitsY = useRef(null)
    //TODO: Clean this up: refHeaderTraits = useRef({b:{}, r:{}, y:{}})
    const refTreeTraits = { b: refHeaderTraitsB, r: refHeaderTraitsR, y: refHeaderTraitsY }
    const treeClass = Beorning
    const [treeTraitStyle, setTreeTraitStyle] = useState(0)
    const [traitHover, setTraitHover] = useState({
        isHover: true,
        hoverTarget: treeClass.b.traits.passiv[0],
    })

    //*function for checking how many Traits (same size) fit into the trait tree header
    //Output: A string which can be inserted into a react style attribute
    function getSize() {
        try {
            //TODO: Loop this when refHeaderTraits is cleaned up
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
                //TODO: fill in padding if maxWidth * refTree.length < width is
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
                <ErrorBoundary>
                    <Tree
                        treeClass={treeClass}
                        treeColor="b"
                        treeRef={refHeaderTraitsB}
                        treeTraitStyle={treeTraitStyle}
                    />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Tree
                        treeClass={treeClass}
                        treeColor="r"
                        treeRef={refHeaderTraitsR}
                        treeTraitStyle={treeTraitStyle}
                    />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Tree
                        treeClass={treeClass}
                        treeColor="y"
                        treeRef={refHeaderTraitsY}
                        treeTraitStyle={treeTraitStyle}
                    />
                </ErrorBoundary>
                {/* <ErrorBoundary>
                    {traitHover.isHover && <Tooltip hoverTarget={traitHover.hoverTarget} />}
                </ErrorBoundary> */}
            </div>
        </RefContext.Provider>
    )
}

export default Content
