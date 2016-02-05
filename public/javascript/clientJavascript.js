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






//determines if credits entry is in error, if it is returns true, if it is not returns false
//allows for partial credits, just in case that's a thing
var isErrorCredits = function(cr) {
    if (Number(cr) == cr) {
        return false;
    }
    return true;
};

//determines if grade entry is in error, if it is returns true, if it is not returns false
var isErrorGrades = function(gr) {
    console.log(gr);
    if ((gr == "A") || (gr == "B") || (gr == "C") || (gr == "D") || (gr == "F") || (gr == "")) {
        return false;

    }
    return true;
};