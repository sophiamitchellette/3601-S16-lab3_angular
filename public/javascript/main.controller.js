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

        ];

        mainControl.addClasses = function(){
            if(mainControl.classNames.length >= 1) {
                mainControl.gpadata.push({text: "Class: " + mainControl.classNames + " Credits: " + mainControl.classCredits + " Grade: " + mainControl.classGrades});
                mainControl.classNames = "";
            }
        };

        mainControl.addCredits = function(){
            if(mainControl.classCredits.length >= 1) {
                mainControl.gpadata.push({text: mainControl.classCredits});
                mainControl.classCredits = "";
            }
        };

        mainControl.addGrades = function(){
            if(mainControl.classGrades.length >= 1) {
                mainControl.gpadata.push({text: mainControl.classGrades});
                mainControl.classGrades = "";
            }
        };

        mainControl.gpaCalc = function(){
            return calculateGPA();
        };

        mainControl.removeData2 = function(index){
            mainControl.gpadata.splice(index, 1);
        };


    });

