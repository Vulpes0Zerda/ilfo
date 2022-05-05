import pointsLookup from '../../lookup/points.json';
import languageLookup from '../../lookup/languages.json';
export const currentPointsBlueprint = () => {
    if (localStorage.getItem('currentPoints')) {
        return JSON.parse(localStorage.getItem('currentPoints'));
    }
    else {
        return {
            b: { sum: 0, points: [] },
            r: { sum: 0, points: [] },
            y: { sum: 0, points: [] },
            sum: 0,
        };
    }
};
export const maxPointsBlueprint = () => {
    if (Math.abs(localStorage.getItem('maxPoints')) <= pointsLookup[0].max &&
        localStorage.getItem('maxPoints')) {
        return {
            change: Math.abs(localStorage.getItem('maxPoints')),
            set: Math.abs(localStorage.getItem('maxPoints')),
        };
    }
    else {
        return {
            change: pointsLookup[pointsLookup.length - 1].max,
            set: pointsLookup[pointsLookup.length - 1].max,
        };
    }
};
export const languageBlueprint = () => {
    if (Math.abs(localStorage.getItem('language')) < languageLookup.length) {
        return Math.abs(localStorage.getItem('language'));
    }
    else {
        return 0;
    }
};
export const levelBlueprint = () => {
    if (Math.abs(localStorage.getItem('level')) < pointsLookup.length &&
        localStorage.getItem('level')) {
        return {
            change: Math.abs(localStorage.getItem('level')),
            set: Math.abs(localStorage.getItem('level')),
        };
    }
    else {
        return { change: 140, set: 140 };
    }
};
export const warningBlueprint = {
    resetWarning: false,
};
export const errorBlueprint = {
    levelErrorNotification: false,
    maxPointsErrorNotification: false,
    currentPointsErrorNotification: false,
};
export const animationBlueprint = {
    current: 'NONE',
    hover: false,
    click: false,
    press: false,
    focus: false,
};
