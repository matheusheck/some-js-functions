function bmiCalculator (weight, height) {
    var bmi = weight/height/height;
    var interpretation1 =  'Your BMI is ' + bmi + ', so you are underweight.';
    var interpretation2 =  'Your BMI is ' + bmi + ', so you have a normal weight.';
    var interpretation3 =  'Your BMI is ' + bmi + ', so you are overweight.'
    if (bmi < 18.5) {
        return interpretation1;
    } else if (18.5<=bmi<=24,9) {
        return interpretation2;
    } else {
        return interpretation3;
    }
}
