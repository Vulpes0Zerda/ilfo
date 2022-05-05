import { LanguageContext, LevelContext, PointContext, PopUpContext } from '../../GlobalContext';
import { useContext } from 'react';
const Options = () => {
    const { language, dispatchLanguage, languagesLookup, translation } = useContext(LanguageContext);
    const { level, dispatchLevel } = useContext(LevelContext);
    const { dispatchMaxPoints, dispatchCurrentPoints } = useContext(PointContext);
    const { dispatchWarning } = useContext(PopUpContext);
    return (<div className="settings__bar__options">
            <label className="settings__bar__options--left">{translation.options.language}</label>
            <select className="settings__bar__options--right settings__bar__options__lang settings__bar__options__form" value={language} onChange={(e) => {
            dispatchLanguage({
                type: 'SET',
                payload: e,
            });
        }}>
                {languagesLookup.map((language) => (<option value={language.langCode} key={language.langCode}>
                        {language.long}
                    </option>))}
            </select>
            <label className="settings__bar__options--left">{translation.options.level}</label>
            <input value={level.change} type={'string'} onChange={(e) => {
            dispatchLevel({ type: 'CHANGE', payload: { e: e } });
        }} onKeyPress={(e) => {
            if (e.key === 'Enter') {
                e.target.blur();
            }
        }} onBlur={(e) => {
            dispatchLevel({
                type: 'SET',
                payload: {
                    dispatchMaxPoints: dispatchMaxPoints,
                    dispatchCurrentPoints: dispatchCurrentPoints,
                    dispatchWarning: dispatchWarning,
                },
            });
        }} name="level" className="settings__bar__options--right settings__bar__options__lvl settings__bar__options__form"/>
            <span className="settings__bar__options--left">{translation.options.tooltips}</span>
            <input type="checkbox" id="tooltip" className="settings__bar__options__tooltip" defaultChecked="checked" name="tooltips"/>
            <label className="settings__bar__options--right settings__bar__options__tooltip__lbl settings__bar__options__form" htmlFor="tooltip">
                {
        //TODO: need to overwork this (find solution for customizable checkbox)
        }
                {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="30"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            clipRule="evenodd"
            version="1.1"
            viewBox="0 0 1211 874"
            xmlSpace="preserve"
        >
            <path
                fill="#D4D4D4"
                d="M574.986 1210.41l635.344-635.287c8.66-8.658 18.62-12.987 29.87-12.987 11.26 0 21.22 4.329 29.87 12.987l68.83 68.831c9.53 9.524 14.08 19.697 13.64 30.52-.43 10.822-4.98 20.563-13.64 29.221L620.44 1422.1c-8.658 8.66-18.398 13.2-29.22 13.64-10.823.43-20.996-4.12-30.52-13.64l-404.309-404.24c-9.524-9.53-14.286-19.916-14.286-31.172 0-11.255 4.329-21.212 12.987-29.87l51.948-51.948c9.524-9.524 19.913-14.286 31.169-14.286 11.255 0 21.645 4.762 31.169 14.286l305.608 305.54z"
                transform="translate(-142.105 -562.136)"
            ></path>
        </svg> */}
            </label>
        </div>);
};
export default Options;
