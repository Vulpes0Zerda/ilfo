import PropTypes from 'prop-types'

const clientMaxSize = (object, boolHeight, boolWidth, boolDiameter) => {
    try {
        const obj = object
        let result = { height: null, width: null, diameter: null }
        let height
        let width
        if (boolHeight || boolDiameter) {
            if (!isNaN(obj[0].clientHeight)) {
                for (let i = 0; i < obj.length; i++) {
                    if (height < parseFloat(getComputedStyle(obj[i]).height, 10) || !height) {
                        height = parseFloat(getComputedStyle(obj[i]).height, 10)
                    }
                }
                result = {
                    ...result,
                    height: height,
                }
            } else {
                throw Error(`${obj}[0].clientHeight is NaN or undefined`)
            }
        }
        if (boolWidth || boolDiameter) {
            if (!isNaN(obj[0].clientWidth)) {
                for (let i = 0; i < obj.length; i++) {
                    if (width < parseFloat(getComputedStyle(obj[i]).width, 10) || !width) {
                        width = parseFloat(getComputedStyle(obj[i]).width, 10)
                    }
                }
                result = {
                    ...result,
                    width: width,
                }
            } else {
                throw Error(`${obj}[0].clientWidth is NaN or undefined`)
            }
        }
        if (boolDiameter) {
            if (!isNaN(width) || !isNaN(height)) {
                const diameter = Math.sqrt(height ** 2 + width ** 2)
                result = {
                    ...result,
                    diameter: diameter,
                }
            } else {
                throw Error(`Internal function error: width or height are NaN or undefined`)
            }
        }
        return result
    } catch (err) {
        console.log(err)
    }
}

clientMaxSize.propTypes = {
    object: PropTypes.object.isRequired,
    boolHeight: PropTypes.bool,
    boolWidth: PropTypes.bool,
    boolDiameter: PropTypes.bool,
}
clientMaxSize.defaultProps = {
    boolHeight: false,
    boolWidth: false,
    boolDiameter: false,
}

export default clientMaxSize
