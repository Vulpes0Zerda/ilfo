import React from 'react'

const TreeBody = ({ treeClass, treeColor }) => {
    return (
        <div className="tree__body">
            <div className="tree__body__traits tree__body__traits--passiv">
                {treeClass[treeColor].passiv.map((t) =>
                    t.traitName ? (
                        <div className="tree__body__trait" key={t.traitName}>
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
                            <img src={t.traitPicture} alt={t.traitName}></img>
                            <div>{t.traitName}</div>
                        </div>
                    ) : (
                        ''
                    ),
                )}
            </div>
        </div>
    )
}

export default TreeBody
