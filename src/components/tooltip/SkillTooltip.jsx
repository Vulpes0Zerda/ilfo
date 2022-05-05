import { LanguageContext } from '../../GlobalContext'
import { useContext } from 'react'

const SkillTooltip = ({ path }) => {
    const { translation } = useContext(LanguageContext)
    const trans = translation.tree.tooltip.skill
    return (
        <div className="tooltip__skill tooltip__window">
            <div className="tooltip__header">
                <div className="tooltip__header__imgSizing">
                    <img
                        className="tooltip__header__img"
                        src={path.skill.picture}
                        alt={path.skill.name}
                    />
                </div>
                <div className="tooltip__header__name">{path.skill.name}</div>
            </div>
            <div className="tooltip__body">
                <div className="tooltip__skill__attributes">
                    <div className="tooltip__skill__attributes--left">
                        {path.skill.animationTime && (
                            <p>
                                {typeof path.skill.animationTime === 'number'
                                    ? `${trans.animationTime}: ${path.skill.animationTime}s`
                                    : path.skill.animationTime}
                            </p>
                        )}
                        {path.skill.damageType && (
                            <p>{`${path.skill.damageType} ${trans.skill}`}</p>
                        )}
                        {path.skill.targets && (
                            <p>{`${trans.maxTargets}: ${path.skill.targets}`}</p>
                        )}
                        {path.skill.area && <p>{`${trans.radius}: ${path.skill.area}m`}</p>}
                        {path.skill.inductionTime && (
                            <p>{`${trans.induction}: ${path.skill.inductionTime}s`}</p>
                        )}
                        {path.skill.channelTime && (
                            <p>{`${trans.channelDuration}: ${path.skill.channelTime}s`}</p>
                        )}
                        {path.skill.resistance && (
                            <p>{`${trans.resistance}: ${path.skill.resistance}`}</p>
                        )}
                        {path.skill.skillType && (
                            <p>{`${trans.skillType}: ${path.skill.skillType}`}</p>
                        )}
                    </div>
                    <div className="tooltip__attributes--right">
                        {path.skill.range && <p>{`${path.skill.range}m ${trans.range}`}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillTooltip
