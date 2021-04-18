/* You just learned a lot of techniques for helping you get unstuck in all debugging situations. Congratulations! Let’s synthesize everything you learned into one debugging process.

Is your code throwing errors? If so, read the error stack trace for the type, description, and location of the error. Go to the error’s location and try to fix.
Is your code broken but not throwing errors? Walk through your code using console.log() statements. When unexpected results occur, isolate the bug and try to fix it.
Did you locate the bug using steps 1 and 2, but can’t fix the bug? Consult documentation to make sure you are using all JavaScript functionality properly. If you are still stuck, Google your issue and consult Stack Overflow for help. Read solutions or post your own Stack Overflow question if none exist on the topic.
It may take some time and practice, but this is how all developers work through their issues, so don’t give up, and you’ll be an expert in no time.

Congratulations again on learning all of these new techniques. Let’s give them one more round of practice so you can see how much progress you’ve made!

*/

function isStringPerfectLength(string, minLength, maxLength) {
    const stringLength = string.length;
    
    if (stringLength > minLength && stringLength < maxLength) {
      return true;
    } else {
      return false;
    }
  }
  
  // Should return true
  console.log("isStringPerfectLength('Dog', 2, 4) returns: " + isStringPerfectLength('Dog', 2, 4));
  
  // Should return false
  console.log("isStringPerfectLength('Mouse', 2, 4) returns: " + isStringPerfectLength('Mouse', 2, 4));
  
  // Should return false
  console.log("isStringPerfectLength('Cat', 4, 9) returns: " + isStringPerfectLength('Cat', 4, 9));