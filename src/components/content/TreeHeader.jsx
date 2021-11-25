import { useState, useLayoutEffect } from 'react'

const TreeHeader = ({ treeClass, treeColor, treeRef, treeTraitStyle }) => {
    function mapHeaderText(
        mapPath,
        textElement,
        breakElement,
        //TODO 0 work {argsName, argsValue} in so that you can pass an Array in and it renders out a argsName and Value pair (prob. with map((value,index)=>`${value} ${argsValue[index]}` or something like that))
    ) {
        return Array.isArray(mapPath)
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
    }
    useLayoutEffect(() => {
        console.log(treeTraitStyle[treeColor])
    }, [treeTraitStyle])
    return (
        <div className="tree__header">
            <div className="tree__header__titel">
                <p>{treeClass[treeColor].header.treeName}</p>
                <p>{`(${treeClass[treeColor].header.treeRole})`}</p>
            </div>
            <div className="tree__header__content">
                <div>{treeClass[treeColor].header.treeExplanation.short}</div>
                <div
                    dangerouslySetInnerHTML={{
                        __html: mapHeaderText(
                            treeClass[treeColor].header.treeExplanation.long,
                            'p',
                            'br',
                        ),
                    }}
                />
                <div
                    dangerouslySetInnerHTML={{
                        __html: mapHeaderText(treeClass[treeColor].header.treeInfo, 'p', 'br'),
                    }}
                />
                {treeClass[treeColor].header.treeSkill ? (
                    <div className="tree__header__traits__titel">
                        You will gain these skills by specialising in this tree:
                    </div>
                ) : (
                    <></>
                )}
                <div
                    className="tree__header__traits"
                    ref={treeRef}
                    style={treeTraitStyle[treeColor]}
                >
                    {Array.isArray(treeClass[treeColor].header.treeSkill) ? (
                        treeClass[treeColor].header.treeSkill.map((currentItem, idx) => (
                            <div className="tree__body__trait tree__header__trait" key={idx}>
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
                                    src={treeClass[treeColor].header.treeSkill.treeSkillPicture}
                                    alt={treeClass[treeColor].header.treeSkill.treeSkillName}
                                />
                            </div>
                            <div className="tree__body__trait__name">
                                {treeClass[treeColor].header.treeSkill.treeSkillName}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TreeHeader
