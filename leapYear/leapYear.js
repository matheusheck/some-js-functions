function isLeapYear (year){
  if (year % 4 === 0){
      if  (year % 400 === 0 || year % 100 !== 0){
        return 'Leap Year.'
      }
        return 'Not leap year.'
    }
  else {
    return 'Not leap year.'
  }
}
