'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: mainCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl as mainControl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    describe("testing data functionality: ", function(){
        it("should contain some data by default", function(){
            expect(scope.mainControl.data.length > 0).toEqual(true);
        });

        it("should be able to remove an item from the list", function(){
           var initialLength = scope.mainControl.data.length;
           scope.mainControl.removeData(1);
           expect(scope.mainControl.data.length < initialLength).toEqual(true);
        });

        it("should be able to add an item to the list", function(){
            var initialLength = scope.mainControl.data.length;
            scope.mainControl.textField = "kittens";
            scope.mainControl.addData();
            expect(scope.mainControl.data.length > initialLength).toEqual(true);
        });

        it("should combine two strings", function(){
            var str1 = "dog";
            var str2 = "house";
            expect(scope.mainControl.cat(str1, str2)).toEqual("doghouse");
        });

        it("should contain not data by default", function(){
            expect(scope.mainControl.gpadata.length == 0).toEqual(true);
        });

        it("should be able to add an item to the list", function(){
            var initialLength = scope.mainControl.gpadata.length;
            scope.mainControl.classNames = "French";
            scope.mainControl.classCredits = "5";
            scope.mainControl.classGrades = "A";
            scope.mainControl.addClasses();
            expect(scope.mainControl.gpadata.length > initialLength).toEqual(true);
        });

        it("should be able to remove an item from the list", function(){
            var initialLength = scope.mainControl.gpadata.length;
            scope.mainControl.removeData2(1);
            expect(scope.mainControl.gpadata.length <= initialLength).toEqual(true);
        });




    });
    //testing for GPA Calculator
    describe('testing for GPA calculator', function(){

        it('should return a 4.0', function(){
            scope.mainControl.classNames = "French";
            scope.mainControl.classGrades = "A";
            scope.mainControl.classCredits = "4";
            scope.mainControl.addClasses();
            scope.mainControl.classNames = "Math";
            scope.mainControl.classGrades = "A";
            scope.mainControl.classCredits = "5";
            scope.mainControl.addClasses();
            scope.mainControl.classNames = "Science";
            scope.mainControl.classGrades = "A";
            scope.mainControl.classCredits = "4";
            scope.mainControl.addClasses();
            expect(scope.mainControl.calculateGPA()).toEqual(4.0);
        });

        it('should return a 3.0', function(){
            scope.mainControl.classNames = "French";
            scope.mainControl.classGrades = "A";
            scope.mainControl.classCredits = "4";
            scope.mainControl.addClasses();
            scope.mainControl.classNames = "Math";
            scope.mainControl.classGrades = "B";
            scope.mainControl.classCredits = "5";
            scope.mainControl.addClasses();
            scope.mainControl.classNames = "Science";
            scope.mainControl.classGrades = "C";
            scope.mainControl.classCredits = "4";
            scope.mainControl.addClasses();
            expect(scope.mainControl.calculateGPA()).toEqual(3.0);
        });


        it('should return a 2.0', function(){
            scope.mainControl.classNames = "French";
            scope.mainControl.classGrades = "B";
            scope.mainControl.classCredits = "4";
            scope.mainControl.addClasses();
            scope.mainControl.classNames = "Math";
            scope.mainControl.classGrades = "C";
            scope.mainControl.classCredits = "5";
            scope.mainControl.addClasses();
            scope.mainControl.classNames = "Science";
            scope.mainControl.classGrades = "D";
            scope.mainControl.classCredits = "4";
            scope.mainControl.addClasses();
            expect(scope.mainControl.calculateGPA()).toEqual(2.0);
        });

        it('should return a 0.0', function(){
            scope.mainControl.classNames = "French";
            scope.mainControl.classGrades = "F";
            scope.mainControl.classCredits = "4";
            scope.mainControl.addClasses();
            scope.mainControl.classNames = "Math";
            scope.mainControl.classGrades = "F";
            scope.mainControl.classCredits = "5";
            scope.mainControl.addClasses();
            scope.mainControl.classNames = "Science";
            scope.mainControl.classGrades = "F";
            scope.mainControl.classCredits = "4";
            scope.mainControl.addClasses();
            expect(scope.mainControl.calculateGPA()).toEqual(0.0);
        });
    });

});




//=== Testing navbarCtrl ===========================================
describe('Testing controller: navbarCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('navbarCtrl as navbar', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    it('should contain pages', function(){
      expect(scope.navbar.pages.length > 0).toEqual(true);
    });
});



