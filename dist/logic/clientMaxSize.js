import PropTypes from 'prop-types';
//*Gets the max Height/Width/Diameter from a array of DOMElements
const clientMaxSize = (object, boolHeight, boolWidth, boolDiameter) => {
    try {
        const obj = object;
        let result = { height: null, width: null, diameter: null };
        if (boolHeight || boolDiameter) {
            if (!isNaN(obj[0].clientHeight) || typeof obj[0] !== undefined) {
                for (let i = 0; i < obj.length; i++) {
                    if (result.height < obj[i].clientHeight || !result.height) {
                        result = Object.assign(Object.assign({}, result), { height: obj[i].clientHeight });
                    }
                }
            }
            else {
                throw new Error(`getComputedStyle(${obj}[0]) is NaN or undefined`);
            }
        }
        if (boolWidth || boolDiameter) {
            if (!isNaN(obj[0].clientWidth) || typeof obj[0] !== undefined) {
                for (let i = 0; i < obj.length; i++) {
                    if (result.width < obj[i].clientWidth || !result.width) {
                        result = Object.assign(Object.assign({}, result), { width: obj[i].clientWidth });
                    }
                }
            }
            else {
                throw new Error(`getComputedStyle(${obj}[0]) is NaN or undefined`);
            }
        }
        if (boolDiameter) {
            if (!isNaN(result.width) || !isNaN(result.height) || typeof obj[0] !== undefined) {
                result = Object.assign(Object.assign({}, result), { diameter: Math.sqrt(Math.pow(result.height, 2) + Math.pow(result.width, 2)) });
            }
            else {
                throw new Error(`Internal function error: width or height are NaN or undefined`);
            }
        }
        return result;
    }
    catch (err) {
        console.log(err);
    }
};
clientMaxSize.propTypes = {
    object: PropTypes.object.isRequired,
};
export default clientMaxSize;
