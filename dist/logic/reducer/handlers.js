import pointsLookup from '../../lookup/points.json';
import levelLookup from '../../lookup/level.json';
export function handleCurrentPoints(state, action) {
    switch (action.type) {
        case 'ADD': {
            const item = state[action.payload.color];
            const idx = action.payload.idx;
            const path = action.payload.path;
            let points = [...item.points];
            let sum = state.sum;
            let colorSum = item.sum;
            while (points.length <= idx) {
                points.push(0);
            }
            if (points[idx] < path.ranks && path.pointRequirement <= colorSum) {
                points[idx]++;
                sum++;
                colorSum++;
            }
            return Object.assign(Object.assign({}, state), { [action.payload.color]: {
                    sum: colorSum,
                    points: points,
                }, sum: sum });
        }
        case 'SUBTRACT':
            return Object.assign(Object.assign({}, state), { sum: 0, [action.payload.color]: { sum: 0, points: [] } });
        case 'CLEAR':
            return {
                b: { sum: 0, points: [] },
                r: { sum: 0, points: [] },
                y: { sum: 0, points: [] },
                sum: 0,
            };
        case 'RE-EVALUATE':
            return state;
        default:
            throw new Error(`action.type: ${action.type} is not a valid action.`);
    }
}
export function handleMaxPoints(state, action) {
    switch (action.type) {
        case 'CHANGE': {
            const e = action.payload.e;
            e.preventDefault();
            if (!isNaN(e.target.value) && e.target.value !== '') {
                if (Math.abs(e.target.value) < 999) {
                    return Object.assign(Object.assign({}, state), { change: Math.abs(e.target.value) });
                }
                else {
                    return Object.assign(Object.assign({}, state), { change: 999 });
                }
            }
            else if (e.target.value === '') {
                return Object.assign(Object.assign({}, state), { change: '' });
            }
            else {
                return state;
            }
        }
        case 'SET': {
            const e = action.payload.e;
            const lvl = action.payload.lvl;
            e.preventDefault();
            if (e.target.value <= pointsLookup[lvl].max &&
                e.target.value >= pointsLookup[lvl].max) {
                return Object.assign(Object.assign({}, state), { set: Math.abs(e.target.value), change: Math.abs(e.target.value) });
            }
            else if (e.target.value > pointsLookup[lvl].max) {
                return Object.assign(Object.assign({}, state), { set: pointsLookup[lvl].max, change: pointsLookup[lvl].max });
            }
            else if (e.target.value < pointsLookup[lvl].min) {
                return Object.assign(Object.assign({}, state), { set: pointsLookup[lvl].min, change: pointsLookup[lvl].min });
            }
            else {
                return state;
            }
        }
        case 'RE-EVALUATE':
            return state;
        case 'INITIALIZE': {
            const lvl = action.payload.lvl;
            if (localStorage.getItem('maxPoints')) {
                if (Math.abs(localStorage.getItem('maxPoints')) <= pointsLookup[lvl].max ||
                    Math.abs(localStorage.getItem('maxPoints')) >= pointsLookup[lvl].min) {
                    return {
                        set: Math.abs(localStorage.getItem('maxPoints')),
                        change: Math.abs(localStorage.getItem('maxPoints')),
                    };
                }
                else {
                    return {
                        set: pointsLookup[lvl].max,
                        change: pointsLookup[lvl].max,
                    };
                }
            }
            else {
                return { set: pointsLookup[lvl].max, change: pointsLookup[lvl].max };
            }
        }
        default:
            throw new Error(`action.type: ${action.type} is not a valid action.`);
    }
}
export function handleLevel(state, action) {
    switch (action.type) {
        case 'CHANGE': {
            const e = action.payload.e;
            if (!isNaN(e.target.value) && e.target.value !== '') {
                if (Math.abs(e.target.value) <= levelLookup.max &&
                    Math.abs(e.target.value) >= levelLookup.min) {
                    return Object.assign(Object.assign({}, state), { change: Math.abs(e.target.value) });
                }
                else if (Math.abs(e.target.value) > levelLookup.max) {
                    return Object.assign(Object.assign({}, state), { change: levelLookup.max });
                }
                else if (Math.abs(e.target.value) < levelLookup.min) {
                    return Object.assign(Object.assign({}, state), { change: levelLookup.min });
                }
                else {
                    return state;
                }
            }
            else if (e.target.value === '') {
                return Object.assign(Object.assign({}, state), { change: '' });
            }
            else {
                return state;
            }
        }
        case 'SET': {
            return Object.assign(Object.assign({}, state), { set: state.change });
        }
        default:
            throw new Error(`action.type: ${action.type} is not a valid action.`);
    }
}
export function handleLanguage(state, action) {
    switch (action.type) {
        case 'SET':
            action.payload.preventDefault();
            return action.payload.target.value;
        default:
            throw new Error(`action.type: ${action.type} is not a valid action.`);
    }
}
export function handleTooltip(state, action) {
    switch (action.type) {
        case 'SET':
            return action.payload.path;
        case 'CLEAR':
            return null;
        default:
            throw new Error(`action.type: ${action.type} is not a valid action.`);
    }
}
export function handleWarning(state, action) {
    switch (action.type) {
        case 'RESET-WARNING':
            return Object.assign(Object.assign({}, state), { resetWarning: !state.resetWarning });
        default:
            throw new Error(`action.type: ${action.type} is not a valid action.`);
    }
}
export function handleError(state, action) {
    switch (action.type) {
        case 'MAX-POINTS-ERROR':
            return Object.assign(Object.assign({}, state), { maxPointsErrorNotification: !state.maxPointsErrorNotification });
        default:
            throw new Error(`action.type: ${action.type} is not a valid action.`);
    }
}
export function handleAnimation(state, action) {
    let updatedState = state.current;
    switch (action.type) {
        case 'HOVER-TOGGLE':
            if (!state.click) {
                if (state.hover) {
                    updatedState = 'NONE';
                }
                else {
                    updatedState = 'HOVER';
                }
            }
            return Object.assign(Object.assign({}, state), { hover: !state.hover, current: updatedState });
        case 'PRESS-TOGGLE':
            if (!state.click) {
                if (state.press) {
                    updatedState = 'NONE';
                }
                else {
                    updatedState = 'PRESS';
                }
            }
            return Object.assign(Object.assign({}, state), { press: !state.press, current: updatedState });
        case 'CLICK-TOGGLE':
            if (state.click) {
                if (state.hover) {
                    updatedState = 'HOVER';
                }
                else {
                    updatedState = 'NONE';
                }
            }
            else {
                updatedState = 'CLICK';
            }
            return Object.assign(Object.assign({}, state), { click: !state.click, current: updatedState });
        default:
            throw new Error(`action.type: ${action.type} is not a valid action`);
    }
    //TODO Still needs Focus state
    //With case 'XYZ-FOCUS-TOGGLE'%
}
