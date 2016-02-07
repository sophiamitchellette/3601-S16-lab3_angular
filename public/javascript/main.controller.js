//==================== MAIN CONTROLLER ==================================
    angular.module('stdControllers').controller('mainCtrl', function(){
        var mainControl = this;
        console.log("Main controller loaded!");

        mainControl.textField = "";

        //testing update

        // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        mainControl.data = [
            {text: "fish"},
            {text: "kittens"},
            {text: "snake"},
            {text: "badger"},
            {text: "puppies"},
            {text: "chimp"}
        ];


        mainControl.addData = function(){
            if(mainControl.textField.length >= 1) {
                mainControl.data.push({text: mainControl.textField});
                mainControl.textField = "";
            }
        };



        mainControl.removeData = function(index){
            mainControl.data.splice(index, 1);
        };



        mainControl.cat = function(str1, str2){
            return str1 + str2;
        };

        mainControl.itemsInList = function(){
            return mainControl.data.length;
        };

        //text fields for class, the class's credits and the class's grade
        mainControl.classNames = "";
        mainControl.classCredits = "";
        mainControl.classGrades = "";

        //array where classes are stored
        //initialized as empty
        mainControl.gpadata = [

        ];

        //adds classes, credits and grade to the list gpadata so long as all fields have something in them and are not in error
        mainControl.addClasses = function(){
            if((mainControl.classNames.length >= 1) && (mainControl.classCredits.length >= 1) && (mainControl.classGrades.length >= 1) && !(isErrorCredits(mainControl.classCredits))  && !(isErrorGrades(mainControl.classGrades))) {
                mainControl.gpadata.push({Class: mainControl.classNames, Credits: mainControl.classCredits, Grade: mainControl.classGrades});
                mainControl.classNames = "";
                mainControl.classCredits = "";
                mainControl.classGrades = "";
            }
        };


        //takes in the three grades and their respective credit hours and returns GPA
        mainControl.calculateGPA = function(){
            var qualityPoints = 0;
            var totalCredits = 0;
            for(i = 0; i < mainControl.gpadata.length; i++){
                qualityPoints = qualityPoints + (parseInt(mainControl.gpadata[i].Credits) * gradeToNumber(mainControl.gpadata[i].Grade));
                totalCredits = totalCredits + parseInt(mainControl.gpadata[i].Credits);
            }


            return Math.round(qualityPoints/totalCredits * 100)/100;

        };

        //determines if fields credits and grades are in error, if so, returns an error message to be displayed
        mainControl.returnError = function(){
            if(isErrorCredits(mainControl.classCredits) && isErrorGrades(mainControl.classGrades)){
                return "Credit value entered is not a number and grade entered is not a valid grade. Credit value must be a number and grades can be A, B, C, D or F.";
            }
            else if(isErrorGrades(mainControl.classGrades)){
                return "Grade entered is not a valid grade. Grades can be A, B, C, D or F.";
            }
            else if(isErrorCredits(mainControl.classCredits)){
                return "Credit value entered is not a number. Credit value must be a number.";
            }
            else{
                return "";
            }
        };


        //removes items from gpadata
        mainControl.removeData2 = function(index){
            mainControl.gpadata.splice(index, 1);
        };




    });

