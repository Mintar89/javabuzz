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

});
