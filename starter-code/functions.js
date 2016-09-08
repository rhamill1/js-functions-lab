// Question 1
function maxOfTwoNumbers(a, b) {
    if (a > b) {
        return a;}

    else if (b > a) {
        return b;}

    else {
        return 'something fishy is going on here... (beard scratching)';}}

// maxOfTwoNumbers(1, 1);


// Question 2
function maxOfThree(a, b, c) {
    if (a > b && a > c) {
        return a;}

    else if (b > a && b > c) {
        return b;}

    else if (c > a && c > b) {
        return c;}

    else {
        return 'something fishy is going on here... (beard scratching)';}}


// Question 3
function isCharacterAVowel() {

}

// Question 4
function sumArray() {

}


// Question 4
function multiplyArray(aray) {
    var multi = 1
    aray.forEach( function(x) {
        multi *= x;
    })
    return multi;
}


// Question 5
var numberOfArguments = function(){
    return arguments.length;}



// Question 6
var reverseString = function (){

};


// Question 7
function findLongestWord (list) {
    var max = 0
    for (var i = 0; i < list.length; i++) {
        if (list[i].length > max) {
                max = list[i].length
        ;};}
    return max;
}


// Question 8
function filterLongWords (list, n) {
    var result = []
        for (var i = 0; i < list.length; i++) {
            if (list[i].length >= n) {
                result.push(list[i]);};}
    return result;
}


// Bonus 1
// (hint: `prototype`)


// Bonus 2
function charactersOccurencesCount() {

}

