import { useContext } from 'react';
import { PointContext, TooltipContext } from '../../GlobalContext';
const Trait = ({ path, color, idx }) => {
    const { currentPoints, dispatchCurrentPoints } = useContext(PointContext);
    const { dispatchTooltip } = useContext(TooltipContext);
    function render() {
        if (path.name) {
            return (<div className="tree__body__trait" key={path.name} onMouseEnter={() => {
                    dispatchTooltip({
                        type: 'SET',
                        payload: { path: path },
                    });
                }} onMouseLeave={() => {
                    dispatchTooltip({
                        type: 'CLEAR',
                    });
                }} onClick={() => {
                    dispatchCurrentPoints({
                        type: 'ADD',
                        payload: {
                            color: color,
                            idx: idx,
                            path: path,
                        },
                    });
                }} onContextMenu={(e) => {
                    e.preventDefault();
                    dispatchCurrentPoints({
                        type: 'SUBTRACT',
                        payload: {
                            color: color,
                            idx: idx,
                            path: path,
                        },
                    });
                }}>
                    <div className="tree__body__trait__imgSizing">
                        <img className="tree__body__trait__img" src={path.picture} alt={path.name}/>
                    </div>
                    <div className="tree__body__trait__name">{path.name}</div>
                    {typeof path.ranks !== 'undefined' ? (<div>{`${currentPoints[color].points[idx]
                        ? currentPoints[color].points[idx]
                        : `0`} / ${path.ranks}`}</div>) : (<></>)}
                </div>);
        }
        else {
            return <div className="tree__body__trait" key={idx}/>;
        }
    }
    return render();
};
export default Trait;
