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

});
