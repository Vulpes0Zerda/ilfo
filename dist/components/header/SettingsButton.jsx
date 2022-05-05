import SettingsSvg from './SettingsSvg';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { AnimationContext } from '../../GlobalContext';
const SettingsButton = () => {
    const { dispatchSettingsAnimation } = useContext(AnimationContext);
    return (<motion.button type="button" className="header__btn" onClick={() => {
            dispatchSettingsAnimation({ type: 'CLICK-TOGGLE' });
        }} onHoverStart={() => {
            dispatchSettingsAnimation({ type: 'HOVER-TOGGLE' });
        }} onHoverEnd={() => {
            dispatchSettingsAnimation({ type: 'HOVER-TOGGLE' });
        }}>
            <SettingsSvg />
        </motion.button>);
};
export default SettingsButton;
