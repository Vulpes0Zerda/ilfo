class maxElementSize {
    // Function: gets a parent (ref) Element and returns the size of the largest child element
    constructor(path) {
        this.path = path;
        this.current = {
            height: undefined,
            width: undefined,
            diagonal: undefined,
        };
    }
    maxSize(rootPath, dimensionPath) {
        try {
            if (typeof rootPath === 'object' && typeof rootPath.length !== 'undefined') {
                let highestResult = 0;
                for (const i in rootPath) {
                    if (highestResult < rootPath[i][dimensionPath] || !highestResult) {
                        highestResult = rootPath[i][dimensionPath];
                    }
                }
                return highestResult;
            }
            else if (typeof rootPath.length === 'undefined' && typeof rootPath !== 'undefined') {
                return rootPath[dimensionPath];
            }
            else {
                throw new Error(`getComputedStyle(${rootPath}[0]) is undefined`);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    get height() {
        if (this.current.height === undefined) {
            this.current.height = this.maxSize(this.path, 'clientHeight');
            return this.current.height;
        }
        else {
            return this.current.height;
        }
    }
    get width() {
        if (this.current.width === undefined) {
            this.current.width = this.maxSize(this.path, 'clientWidth');
            return this.current.width;
        }
        else {
            return this.current.width;
        }
    }
    get diagonal() {
        if (this.current.height === undefined) {
            this.current.height = this.maxSize(this.path, 'clientHeight');
        }
        if (this.current.width === undefined) {
            this.current.width = this.maxSize(this.path, 'clientWidth');
        }
        this.current.diagonal = Math.sqrt(Math.pow(this.current.width, 2) + Math.pow(this.current.height, 2));
        return this.current.diagonal;
    }
}
export default maxElementSize;
