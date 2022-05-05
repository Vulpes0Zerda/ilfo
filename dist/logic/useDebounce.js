var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
const Debounce = (fn, delay = 1) => {
    // Creating a ref to keep track of latest things
    const ref = useRef({ id: 0 });
    // Always use the latest funcion that is passped
    ref.current.fn = fn;
    // Create the debounced function
    const debouncer = useCallback(
    // Proxy all arguments to our debounced function
    (...args) => {
        // Create a new promise
        ref.current.promise = new Promise((resolve, reject) => {
            // Keep track of resolve and reject
            ref.current.resolve = resolve;
            ref.current.reject = reject;
        });
        // Clear the old timeout if one exists!
        if (ref.current.timeout) {
            clearTimeout(ref.current.timeout);
        }
        ref.current.timeout = setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
            ref.current.timeout = undefined;
            // Make a checkLatest function
            const checkLatest = () => id === ref.current.id;
            try {
                // Run the debounced function
                const response = yield ref.current.fn(...args);
                // If the request is latest, resolve
                if (checkLatest())
                    ref.current.resolve(response);
            }
            catch (err) {
                // If the request is latest, reject
                if (checkLatest())
                    ref.current.reject(err);
            }
            // Get a new ID for this async request
            const id = ref.current.id + 1;
            // Update the hook with the latest request ID
            ref.current.id = id;
        }), delay);
        // Always return the promise!
        return ref;
    }, [delay]);
    return debouncer;
};
Debounce.propTypes = {
    object: PropTypes.object.isRequired,
    boolWidth: PropTypes.bool,
    boolHeight: PropTypes.bool,
    boolDiameter: PropTypes.bool,
};
export default Debounce;
