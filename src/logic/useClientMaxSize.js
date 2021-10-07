import PropTypes from 'prop-types'

const clientMaxSize = (object, boolWidth, boolHeight, boolDiameter) => {
    return new Promise((resolve, reject) => {
        const obj = object
        if (!obj.length || !obj[0] || !obj) {
            reject(
                'Path is either undefined or not a valid path for this operation.',
            )
        } else {
            let result = []
            let width
            let height
            if (boolWidth || boolDiameter) {
                if (!isNaN(obj[0].clientWidth)) {
                    for (let i = 0; i < obj.length; i++) {
                        if (width < obj[i].clientWidth || !width) {
                            width = obj[i].clientWidth
                        }
                    }
                    result.push(width)
                } else {
                    reject(`${obj}[0].clientWidth is NaN`)
                }
            }
            if (boolHeight || boolDiameter) {
                if (!isNaN(obj[0].clientHeight)) {
                    for (let i = 0; i < obj.length; i++) {
                        if (height < obj[i].clientHeight || !height) {
                            height = obj[i].clientHeight
                        }
                    }
                    result.push(height)
                } else {
                    reject(`${obj}[0].clientHeight is NaN`)
                }
            }
            if (boolDiameter) {
                if (!isNaN(width) || !isNaN(height)) {
                    const diameter = Math.sqrt(height ** 2 + width ** 2)
                    result.push(diameter)
                } else {
                    reject(`Internal function error: width or height are NaN`)
                }
            }
            resolve(result)
        }
    })
}

clientMaxSize.propTypes = {
    object: PropTypes.object.isRequired,
    boolWidth: PropTypes.bool,
    boolHeight: PropTypes.bool,
    boolDiameter: PropTypes.bool,
}
clientMaxSize.defaultProps = {
    boolWidth: false,
    boolHeight: false,
    boolDiameter: false,
}

export default clientMaxSize