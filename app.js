/**
 * Created by USER on 13/05/2017.
 */

/**
 *
 * @returns {Function}
 */
function counter() {

    var count = 0;
    return function () {
        //increment count value
        return ++count;
    }
}

var iterate = counter();
console.log(iterate());
console.log(iterate());
console.log(iterate());
console.log(iterate());
console.log(iterate());