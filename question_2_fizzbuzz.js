var fizzBuzz = function( test ){
    if ( test % 3 === 0 ){
        return 'Fizz';
    } else if (test % 5 === 0 ){
        return 'Buzz';
    }
    return '';
};

//chrome console asserts
console.assert(fizzBuzz(-1) === '');
console.assert(fizzBuzz(0) === 'Fizz');
console.assert(fizzBuzz(-3) === 'Fizz');
console.assert(fizzBuzz(3) === 'Fizz');
console.assert(fizzBuzz(5) === 'Buzz');
console.assert(fizzBuzz(-5) === 'Buzz');
console.assert(fizzBuzz(-15) === 'Fizz');
console.assert(fizzBuzz(15) === 'Fizz');
console.assert(fizzBuzz(Math.pow(3,100) === 'Fizz'));
console.assert(fizzBuzz(Math.pow(-3,100) === 'Fizz'));
console.assert(fizzBuzz(Math.pow(5,100) === 'Fizz'));
console.assert(fizzBuzz(Math.pow(-5,100) === 'Fizz'));



