import React from 'react'

const Tooltip = ({ hoverTarget }) => {
    const t = hoverTarget
    function mapTooltip(params) {}
    return (
        <div className="tooltip">
            <div className="tooltip__header">
                <div className="tooltip__header__trait__imgSizing">
                    <img
                        className="tooltip__header__trait__img"
                        src={t.traitPicture}
                        alt={t.traitName}
                    />
                </div>
                <div className="tooltip__header__trait__name">{t.traitName}</div>
            </div>
            <div className="tooltip__body"></div>
        </div>
    )
}

export default Tooltip
