import { createRef, useLayoutEffect, useState, useEffect, useRef } from 'react'
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
    const [countState, setCountState] = useEventState(0)
    //!rerenders too much. Check rerender cycle

    useLayoutEffect(() => {
        const fireThis = () => {
            //! Ref sometimes just is undefined (ask SO about it)
            //Changed createRef to useRef (probably fixed it)
            try {
                const maxSizeB = clientMaxSize(refHeaderTraitsB.current.children, true, true)
                const maxSizeR = clientMaxSize(refHeaderTraitsR.current.children, true, true)
                const maxSizeY = clientMaxSize(refHeaderTraitsY.current.children, true, true)
                const sizeHeaderTraits = {
                    b: { ...maxSizeB },
                    r: { ...maxSizeR },
                    y: { ...maxSizeY },
                }
                const sizeTree = {
                    height: refTree.current.clientHeight,
                    width: refTree.current.clientWidth,
                }
                for (let idx in sizeHeaderTraits) {
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
                    setCountState(++countState)
                }
                console.log(countState)
            } catch (err) {
                console.log(err)
            }
        }
        fireThis()
        window.addEventListener('resize', fireThis)
        return window.addEventListener('resize', fireThis)
    }, [])

    return (
        <RefContext.Provider
            value={{
                refTree,
            }}
        >
            <div className="content">
                <Tree treeClass={treeClass} treeColor="b" treeRef={refHeaderTraitsB} />
                <Tree treeClass={treeClass} treeColor="r" treeRef={refHeaderTraitsR} />
                <Tree treeClass={treeClass} treeColor="y" treeRef={refHeaderTraitsY} />
            </div>
        </RefContext.Provider>
    )
}

export default Content
