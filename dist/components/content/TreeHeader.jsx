import Traits from './Traits';
import MapElement from './MapElement';
import { useContext } from 'react';
import { LanguageContext } from '../../GlobalContext';
const TreeHeader = ({ treeClass, treeColor, treeRef, treeTraitStyle }) => {
    const informationPath = treeClass.tree[treeColor].information.header;
    const traitsPath = treeClass.tree[treeColor].traits.header;
    const { translation } = useContext(LanguageContext);
    return (<div className="tree__header">
            <div className="tree__header__titel">
                <p>{informationPath.name}</p>
                <MapElement path={informationPath.role} tag={'p'}/>
            </div>
            <div className="tree__header__content">
                <MapElement path={informationPath.explanation.short} tag={'p'}/>
                <MapElement path={informationPath.explanation.long} tag={'p'}/>
                <MapElement path={informationPath.passiv} tag={'p'}/>
                {traitsPath.name || traitsPath[0].name ? (<div className="tree__header__traits__titel">
                        {`${translation.tree.header.gainTheseSkillsBySpecialising}:`}
                    </div>) : (<></>)}
                <div className="tree__header__traits" ref={(el) => {
            treeRef.current[treeColor] = el;
        }} style={treeTraitStyle[treeColor]} onContextMenu={(e) => {
            e.preventDefault();
        }}>
                    <Traits path={traitsPath} color={treeColor}/>
                </div>
            </div>
        </div>);
};
export default TreeHeader;
