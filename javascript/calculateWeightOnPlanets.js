// Write your function here:

const calculateWeight = (earthWeight, planet) => {
    switch (planet) {
      case 'Mercury':
          return earthWeight * .378;
      case 'Venus':
           return earthWeight * .907;
      case 'Mars':
          return earthWeight * .377;
      case 'Jupiter':
          return earthWeight * 2.36;
      case 'Saturn':
          return earthWeight * .916;
      default:
          return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
    }; //closes planet switch
  }; // closes calculateWeight
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(calculateWeight(100, 'Jupiter')) // Should print 236
  
  // We encourage you to add more function calls of your own to test your code!
  /*Though an object’s mass remains consistent throughout the universe, weight is determined by the force of gravity on an object. Since different planets have different gravity, the same object would weigh different amounts on each of those planets! Cool, huh?

Write a function, calculateWeight(). It should:

    have two parameters: earthWeight and planet
    expect earthWeight to be a number
    expect planet to be a string
    return a number representing what that Earth-weight would equate to on the planet passed in.

Handle the following cases:
'Mercury' weight = earthWeight * 0.378
'Venus' weight = earthWeight * 0.907
'Mars' weight = earthWeight * 0.377
'Jupiter' weight = earthWeight * 2.36
'Saturn' weight = earthWeight * 0.916
For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
*/