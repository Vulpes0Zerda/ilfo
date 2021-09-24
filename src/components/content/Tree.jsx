import React from 'react-dom'
import { useEffect, useRef } from 'react'
import clientMaxSize from '../../logic/clientMaxSize'

const Tree = ({ treeClass, treeColor }) => {
    const treeGainedTraits = useRef()
    useEffect(() => {
        try {
            const path = treeGainedTraits.current.children
            console.log(clientMaxSize(path, true, false, false))
            /* Array.isArray(path)?  */ path.map((a) => a)
        } catch (err) {
            console.log(err)
        }
    })
    try {
        //TODO Programming logic for Trait tree for Left/Right Click [+/- Points to traits]
        //TODO Programming logic for Trait tree for Touch/- Button under tree for Mobile [+/- Points to traits]
        //TODO Programming logic for JSON compiling
        //TODO Programming logic for trait tree swap for mobile
        const mapHeaderText = (
            mapPath,
            textElement,
            breakElement,
            //TODO 0 work {argsName, argsValue} in so that you can pass an Array in and it renders out a argsName and Value pair (prob. with map((value,index)=>`${value} ${argsValue[index]}` or something like that))
        ) =>
            Array.isArray(mapPath)
                ? mapPath
                      .map((currentItem, idx) =>
                          currentItem !== ''
                              ? `<${textElement} key=${idx}>${currentItem}</${textElement}>`
                              : breakElement
                              ? `<${breakElement} />`
                              : ``,
                      )
                      .join('')
                : `<${textElement}>${mapPath}</${textElement}>`

        const mapHeaderTraits = () =>
            Array.isArray(treeClass[treeColor].header.treeSkill) ? (
                treeClass[treeColor].header.treeSkill.map((currentItem) => (
                    <div className="tree__body__trait tree__header__trait">
                        <div className="tree__body__trait__imgSizing">
                            <img
                                className="tree__body__trait__img"
                                src={currentItem.treeSkillPicture}
                                alt={currentItem.treeSkillName}
                            />
                        </div>
                        <div className="tree__body__trait__name">
                            {currentItem.treeSkillName}
                        </div>
                    </div>
                ))
            ) : (
                <div className="tree__body__trait tree__header__trait">
                    <div className="tree__body__trait__imgSizing">
                        <img
                            className="tree__body__trait__img"
                            src={
                                treeClass[treeColor].header.treeSkill
                                    .treeSkillPicture
                            }
                            alt={
                                treeClass[treeColor].header.treeSkill
                                    .treeSkillName
                            }
                        />
                    </div>
                    <div className="tree__body__trait__name">
                        {treeClass[treeColor].header.treeSkill.treeSkillName}
                    </div>
                </div>
            )
        return (
            <div className={`tree__${treeColor} tree`}>
                <div className="tree__header">
                    <div className="tree__header__titel">
                        <p>{treeClass[treeColor].header.treeName}</p>
                        <p>{`(${treeClass[treeColor].header.treeRole})`}</p>
                    </div>
                    <div className="tree__header__content">
                        <div>
                            {treeClass[treeColor].header.treeExplanation.short}
                        </div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: mapHeaderText(
                                    treeClass[treeColor].header.treeExplanation
                                        .long,
                                    'p',
                                    'br',
                                ),
                            }}
                        />
                        <div
                            dangerouslySetInnerHTML={{
                                __html: mapHeaderText(
                                    treeClass[treeColor].header.treeInfo,
                                    'p',
                                    'br',
                                ),
                            }}
                        />
                        <div className="tree__header__traits__titel">
                            You will gain these skills by specialising in this
                            tree:
                        </div>
                        <div
                            className="tree__header__traits"
                            ref={treeGainedTraits}
                        >
                            {mapHeaderTraits()}
                            {/* setColoumWidth() */}
                        </div>
                    </div>
                </div>
                <div className="tree__body">
                    <div className="tree__body__traits tree__body__traits--passiv">
                        {treeClass[treeColor].passiv.map((t) =>
                            t.traitName ? (
                                <div
                                    className="tree__body__trait"
                                    key={t.traitName}
                                >
                                    <div className="tree__body__trait__imgSizing">
                                        <img
                                            className="tree__body__trait__img"
                                            src={t.traitPicture}
                                            alt={t.traitName}
                                        />
                                    </div>
                                    <div className="tree__body__trait__name">
                                        {t.traitName}
                                    </div>
                                </div>
                            ) : (
                                ''
                            ),
                        )}
                    </div>
                    <div className="tree__body__traits tree__body__traits--activ">
                        {treeClass[treeColor].activ.map((t) =>
                            t.traitName ? (
                                <div className="tree__body__trait">
                                    <img
                                        src={t.traitPicture}
                                        alt={t.traitName}
                                    ></img>
                                    <div>{t.traitName}</div>
                                </div>
                            ) : (
                                ''
                            ),
                        )}
                    </div>
                </div>
            </div>
        )
    } catch (err) {
        console.log(err)
        return (
            <div className={`tree__${treeColor} tree`}>
                <div className="tree__header">
                    <div className="tree__header__titel"></div>
                    <div className="tree__header__content"></div>
                </div>
                <div className="tree__body">
                    <div className="tree__body__traits tree__body__traits--passiv"></div>
                    <div className="tree__body__traits tree__body__traits--activ"></div>
                </div>
            </div>
        )
    }
}

export default Tree
