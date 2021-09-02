import Beorning from '../classes/Beorning.json'

const Content = () => {
    //TODO Programming logic for Trait tree for Left/Right Click [+/- Points to traits]
    //TODO Programming logic for Trait tree for Touch/- Button under tree for Mobile [+/- Points to traits]
    //TODO Programming logic for JSON compiling
    //TODO Programming logic for trait tree swap for mobile
    return (
        <div className="content">
            <div className="tree__b tree">
                <div className="tree__header">
                    <div className="tree__header__titel">
                        <p>{Beorning.b.header.treeName}</p>
                        <p>{`(${Beorning.b.header.treeRole})`}</p>
                    </div>
                    <div className="tree__header__content">
                        <p>{Beorning.b.header.treeExplanation.short}</p>
                        {Array.isArray(
                            Beorning.b.header.treeExplanation.long,
                        ) ? (
                            Beorning.b.header.treeExplanation.long.map((t) =>
                                t !== '' ? <p>{t}</p> : <br />,
                            )
                        ) : (
                            <p>{Beorning.b.header.treeExplanation.long}</p>
                        )}
                        {Array.isArray(Beorning.b.header.treeInfo) ? (
                            Beorning.b.header.treeInfo.map((t) =>
                                t !== '' ? <p>{t}</p> : <br />,
                            )
                        ) : (
                            <p>{Beorning.b.header.treeInfo}</p>
                        )}
                    </div>
                </div>
                <div className="tree__body">
                    <div className="tree__body__traits tree__body__traits--passiv">
                        {Beorning.b.passiv.map((t) =>
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
                        {Beorning.b.activ.map((t) =>
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
