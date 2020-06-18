var output = []
var x = 0
function fizzBuzz(){
    x++;
    if (x % 3 === 0 && x % 5 === 0) {var y='fizzBuzz'}
    else if (x % 3 === 0) {y = 'fizz'}
    else if (x % 5 === 0) {y='buzz'}
    else {y=x};
    output.push(y);
    return output;
}
