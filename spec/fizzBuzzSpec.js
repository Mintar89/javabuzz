describe('FizzBuzz', function() {
  
  let fizzBuzz

  beforeEach(function(){
    fizzBuzz = new FizzBuzz();
  });
  
  describe('Fizz', function() { 
    it("prints 'Fizz' when number is divisible by 3", function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });
  });

  describe('Buzz', function() {
    it("prints 'Buzz' when number is divisible by 5", function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });
  });

  describe('FizzBuzz', function() {
    it ("prints 'FizzBuzz' when number is divisible by 3 and 5", function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });
  });

  describe('Print numbers', function() {
    it ("prints numbers not divisible by 3 or 5", function() {
      expect(fizzBuzz.play(8)).toEqual(8);
    });
  });
});
