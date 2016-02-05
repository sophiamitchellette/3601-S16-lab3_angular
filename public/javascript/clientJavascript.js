// Our javascript for the CLIENT side.
// This will run on the browser.

/**
 * Takes no arguments, and creates a javascript alert in the client's browser.
 */
var sendAlert = function(){
    alert("THIS IS AN ALERT!");
};

/**
 * Used for getting the length of a string. For example only, you won't likely need to use something like this...
 * DIFFERENT FROM THE stringLength function in the server side javascript!!!
 *
 * @param str  - the string to have its length returned
 * @returns {*}  - an integer, the length of the string
 */
var testStringLength = function(str){
    return str.length;
};


/**
 * Takes no arguments, returns the string "kittens"
 *
 * @returns {string}  - returns "kittens"
 */
var returnKittens = function(){
    return "kittens";
};

//converts text to numerical decimal
var gradeToNumber = function(gr){
    if(gr == "A")
    {
        return 4.0;
    }
    if(gr == "B")
    {
        return 3.0;
    }
    if(gr == "C")
    {
        return 2.0;
    }
    if(gr == "D")
    {
        return 1.0;
    }
    if(gr == "F")
    {
        return 0.0;
    }

};





//takes in the three grades and their respective credit hours and returns GPA
var calculateGPA = function(gpadata){
    var qualityPoints = 0;
    var totalCredits = 0;
    for(i = 0; i < gpadata.length; i++){
        qualityPoints = qualityPoints + (parseInt(gpadata[i].Credits) * gradeToNumber(gpadata[i].Grade));
        totalCredits = totalCredits + parseInt(gpadata[i].Credits);
    }


    return Math.round(qualityPoints/totalCredits * 100)/100;

};


