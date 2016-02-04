
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

});

//testing for GPA Calculator
describe('testing for GPA calculator', function(){

    it('should return a 4.0', function(){
        expect(calculateGPA([{Class: "French", Credits: "4", Grade: "A"}, {Class: "Math", Credits: "5", Grade: "A"}, {Class: "Science", Credits: "4", Grade: "A"}])).toEqual(4.0);
    });

    it('should return a 3.0', function(){
        expect(calculateGPA([{Class: "French", Credits: "4", Grade: "A"}, {Class: "Math", Credits: "5", Grade: "B"}, {Class: "Science", Credits: "4", Grade: "C"}])).toEqual(3.0);
    });


    it('should return a 2.0', function(){
        expect(calculateGPA([{Class: "French", Credits: "4", Grade: "B"}, {Class: "Math", Credits: "5", Grade: "C"}, {Class: "Science", Credits: "4", Grade: "D"}])).toEqual(2.0);
    });

    it('should return a 0.0', function(){
        expect(calculateGPA([{Class: "French", Credits: "4", Grade: "F"}, {Class: "Math", Credits: "5", Grade: "F"}, {Class: "Science", Credits: "4", Grade: "F"}])).toEqual(0.0);
    });
});


//testing for gradeToNumber
describe('testing for gradeToNumber', function(){

    it('A return a 4.0', function(){
        expect(gradeToNumber("A")).toBe(4.0);
    });

    it('B return a 3.0', function(){
        expect(gradeToNumber("B")).toBe(3.0);
    });

    it('D return a 1.0', function(){
        expect(gradeToNumber("D")).toBe(1.0);
    });
});

