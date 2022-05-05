const iterate = (iterations, ...elements) => {
    //*loops through the elements (array, object or variable) a certain number of times, repeating if the number of iterations is bigger than the number of elements
    let arr = [];
    if (Array.isArray(elements)) {
        for (let i = 0; i < iterations; i++) {
            arr.push(elements[i]);
        }
    }
    else if (Object.isObject(elements)) {
        for (let i = 0; i < iterations; i++) {
            arr.push(elements[i]);
        }
    }
    else {
        for (let i = 0; i < iterations; i++) {
            arr.push(elements);
        }
    }
    return arr;
};
export default iterate;
