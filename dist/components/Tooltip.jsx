import SkillTooltip from './tooltip/SkillTooltip';
import TraitTooltip from './tooltip/TraitTooltip';
const Tooltip = ({ path }) => {
    return (<div className="tooltip">
            {path.trait && path.trait.effect[0] && <TraitTooltip path={path}/>}
            {path.skill && path.skill.name && <SkillTooltip path={path}/>}
        </div>);
};
export default Tooltip;
