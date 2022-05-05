import { useContext } from 'react'
import { LanguageContext } from '../../GlobalContext'

const TraitTooltip = ({ path }) => {
    const { translation } = useContext(LanguageContext)
    const trans = translation.tree.tooltip.trait
    function mapRanks() {
        path.trait.effect.map((item, idx) => {
            return <div>{path.ranks && <p>{`${trans.rank} ${idx + 1}`}</p>}</div>
        })
    }
    return (
        <div className="tooltip__trait tooltip__window">
            <div className="tooltip__header">
                <div className="tooltip__header__imgSizing">
                    <img className="tooltip__header__img" src={path.picture} alt={path.name} />
                </div>
                <div className="tooltip__header__name">{path.name}</div>
            </div>
            <div className="tooltip__body">
                <div className="tooltip__trait_ranks">
                    {Array.isArray(path.trait.effect) && mapRanks()}
                </div>
            </div>
        </div>
    )
}

export default TraitTooltip
