import React from 'react'

const Tooltip = ({ hoverTarget }) => {
    const t = hoverTarget
    function mapTooltip(t) {
        let tooltipBody = []

        for (let i = 0; i < i; i++) {}
        return tooltipBody
    }
    return (
        <div className="tooltip">
            <div className="tooltip__header">
                <div className="tooltip__header__imgSizing">
                    <img className="tooltip__header__img" src={t.picture} alt={t.name} />
                </div>
                <div className="tooltip__header__name">{t.name}</div>
            </div>
            <div className="tooltip__body">{mapTooltip(t)}</div>
        </div>
    )
}

export default Tooltip
