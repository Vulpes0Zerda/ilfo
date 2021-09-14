import Beorning from '../classes/Beorning.json'

const Content = () => {
    //TODO Programming logic for Trait tree for Left/Right Click [+/- Points to traits]
    //TODO Programming logic for Trait tree for Touch/- Button under tree for Mobile [+/- Points to traits]
    //TODO Programming logic for JSON compiling
    //TODO Programming logic for trait tree swap for mobile
    const classTree = Beorning
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

    const mapHeaderTraits = () => {
        Array.isArray(classTree.b.header.treeSkill) ? (
            classTree.b.header.treeSkill.map((currentItem) => (
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
                        src={classTree.b.header.treeSkill.treeSkillPicture}
                        alt={classTree.b.header.treeSkill.treeSkillName}
                    />
                </div>
                <div className="tree__body__trait__name">
                    {classTree.b.header.treeSkill.treeSkillName}
                </div>
            </div>
        )
    }
    const setColoumWidth = async () => await mapHeaderTraits
    return (
        <div className="content">
            <div className="tree__b tree">
                <div className="tree__header">
                    <div className="tree__header__titel">
                        <p>{classTree.b.header.treeName}</p>
                        <p>{`(${classTree.b.header.treeRole})`}</p>
                    </div>
                    <div className="tree__header__content">
                        <div>{classTree.b.header.treeExplanation.short}</div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: mapHeaderText(
                                    classTree.b.header.treeExplanation.long,
                                    'p',
                                    'br',
                                ),
                            }}
                        />
                        <div
                            dangerouslySetInnerHTML={{
                                __html: mapHeaderText(
                                    classTree.b.header.treeInfo,
                                    'p',
                                    'br',
                                ),
                            }}
                        />
                        <div className="tree__header__traits__titel">
                            You will gain these skills by specialising in this
                            tree:
                        </div>
                        <div className="tree__header__traits">
                            {mapHeaderTraits()}
                        </div>
                    </div>
                </div>
                <div className="tree__body">
                    <div className="tree__body__traits tree__body__traits--passiv">
                        {classTree.b.passiv.map((t) =>
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
                        {classTree.b.activ.map((t) =>
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
            <div className="tree__r tree"></div>
            <div className="tree__y tree"></div>
        </div>
    )
}

export default Content
