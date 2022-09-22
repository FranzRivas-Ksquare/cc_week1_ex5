/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level

// function faltten:
// description: flatt a nested array
// input: array
// output: retrun 1D array

*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
    const result = [];
    const recursiveFlat = (nestArr) => {
        let counter = 0
        while (counter < nestArr.length) {
        const value = nestArr[counter];
        if (Array.isArray(value)) {
            recursiveFlat(value);
        } else {
            result.push(value)
        }
        counter++;
        }
    }
    recursiveFlat(arr);
    return result;
    /* Only make changes below this comment */
}



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;