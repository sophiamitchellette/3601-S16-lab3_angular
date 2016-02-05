//==================== MAIN CONTROLLER ==================================
    angular.module('stdControllers').controller('mainCtrl', function(){
        var mainControl = this;
        console.log("Main controller loaded!");

        mainControl.textField = "";



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

        mainControl.classNames = "";
        mainControl.classCredits = "";
        mainControl.classGrades = "";

        mainControl.gpadata = [
            {Class: "French", Credits: "5", Grade: "A"},
            {Class: "Math", Credits: "5", Grade: "B"}

        ];

        mainControl.addClasses = function(){
            if((mainControl.classNames.length >= 1) && (mainControl.classCredits.length >= 1) && (mainControl.classGrades.length >= 1) && !(isErrorCredits(mainControl.classCredits))) {
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

        mainControl.returnError = function(){
            if(isErrorCredits(mainControl.classCredits) && isErrorGrades(mainControl.classGrades)){
                return "Not a number and not a valid grade.";
            }
            else if(isErrorGrades(mainControl.classGrades)){
                return "Not a valid grade.";
            }
            else if(isErrorCredits(mainControl.classCredits)){
                return "Not a number.";
            }
        };


        //function to determine correct color
        mainControl.colorChange = function(){

            if(mainControl.calculateGPA() > 3.0){
                document.getElementById("gpaDisplay").style.color = 'green';
            }
            else if(mainControl.calculateGPA() > 2.0){
                document.getElementById("gpaDisplay").style.color = 'yellow';
            }
            else if(mainControl.calculateGPA() > 1.0){
                document.getElementById("gpaDisplay").style.color = 'orange';
            }
            else{
                document.getElementById("gpaDisplay").style.color = 'red';
            }

        };

        mainControl.removeData2 = function(index){
            mainControl.gpadata.splice(index, 1);
        };




    });

