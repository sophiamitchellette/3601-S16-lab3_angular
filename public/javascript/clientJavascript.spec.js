
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
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

describe('testing for credits error', function(){

    it('A return true', function(){
        expect(isErrorCredits("A")).toBe(true);
    });

    it('5 return false', function(){
        expect(isErrorCredits("5")).toBe(false);
    });

    it('A5 return true', function(){
        expect(isErrorCredits("A5")).toBe(true);
    });

    it('5.5 return false', function(){
        expect(isErrorCredits("5.5")).toBe(false);
    });

});

describe('testing for grades error', function(){

    it('A return false', function(){
        expect(isErrorGrades("A")).toBe(false);
    });

    it('B return false', function(){
        expect(isErrorGrades("B")).toBe(false);
    });

    it('5 return true', function(){
        expect(isErrorGrades("5")).toBe(true);
    });

    it('A- return true', function(){
        expect(isErrorGrades("A-")).toBe(true);
    });

    it('B5 return true', function(){
        expect(isErrorGrades("B5")).toBe(true);
    });

});