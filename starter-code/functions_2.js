// Question 1
function maxOfTwoNumbers(a,b) {

}

// Question 2
function maxOfThree() {

}

// Question 3
function isCharacterAVowel(str) {
  var vow = ['a','e','i','o','u'];
  for(var i=0; i<vow.length ;i++ ){
      if(vow[i] == str)
         return true;
  }
  return false;

}

// Question 4
function sumArray(aray) {
    var cnt = 0;
    for(var i=0;  i < aray.length; i++){
        cnt+= aray[i];
    }
    return cnt;
}


// Question 4
function multiplyArray() {


}


// Question 5
var numberOfArguments = function(){

}



// Question 6
var reverseString = function (str){
    //return str.split('').reverse().join('');
    var rts ="";
    for( var i=str.length-1; i >= 0 ; i--){
      rts+=str[i];
       // // console.log(str.charAt(i));
       //   rts=rts.concat(str.charAt(i));
    }
    return rts;
};


// Question 7
function findLongestWord () {

}


// Question 8
function filterLongWords () {

}


// Bonus 1
// (hint: `prototype`)

String.prototype.reverseString = function (){
    //return str.split('').reverse().join('');
    var rts ="";
    for( var i=this.length-1; i >= 0 ; i--){
      rts+=this[i];
       // // console.log(str.charAt(i));
       //   rts=rts.concat(str.charAt(i));
    }
    return rts;
};



// Bonus 2
function charactersOccurencesCount(str) {
    var result = {};
    var current="";
    for (var i =0 ; i <str.length; i++) {
        current=str[i];
        if( !result.hasOwnProperty(current) )
            result[current] =1;
        else {
            result[current]+=1;
    }


}
return result;
}
