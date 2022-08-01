// So recently we talked about a soccer match between the Emerald Eagles and the Draconian Dragons. We used conditional logic to determine soccer match scenarios, and used arrays to manage Mahalia’s backpack. But, there are more than one match in a season. Do we really want to rewrite the same blocks of code over and over again?
//Create variable that tracks the Eagles' morale.

let eaglesMorale = 100;
let eaglesMoraleStr = String(eaglesMorale);
console.log(eaglesMorale, eaglesMoraleStr);

// lets create a string that declares a winner. The winner should be the Dragons.
// Then replace the Dragons with the Eagles.
let theWinnerIs = 'The Dragons are the winner.';
let newWinner = theWinnerIs.replace('Dragons', 'Eagles')
console.log(newWinner);

//Now lets conrfirm that our string contains 'The Eagles'
console.log(newWinner.includes('Eagles'));

//Now we have to convert out string to kebab case (all lower with hyphens)
// The Eagles are the winners like the-eagles-are-the-winners.

//let newWinnerLower = newWinner.toLowerCase();
//let newWinnerSplit = newWinnerLower.split(' ');
//let newWinnerKebab = newWinnerSplit.join('-');
//Lets combine the above
let newWinnerKebab = newWinner.toLowerCase().split(' ').join('-');
console.log(newWinnerKebab);

// Now, let’s create a simple function to see if the Emerald Eagles still have morale left, and then console.log the result.

function doEaglesHaveMorale(morale){
    if (morale > 0){
        console.log("The Emerald Eagles have some morale left!");
    } else {
        console.log("The Emerald Eagles dont have any morale left.");
    }
}

//So we have written this function, but you might notice, it has not actually run yet. This is because functions do not run until they are called. Let’s call the above function.
doEaglesHaveMorale();

// Now lets create a function that can be used every time the Eagles lose a match.
const reduceMorale = (amount) => {
    eaglesMorale -= amount;
};

reduceMorale(20);

//With our function, we can call our block of code over and ocer again. Call the function again, because the Eagles just lost another match worth 12 morale.
reduceMorale(12);

//If that wasn’t all, the Eagles lost a third match. However, they were already expecting to lose, so this match is only 6 morale.
reduceMorale(6);

//At this point the Emerald Eagles have lost a few times. It would probably be a good time to check and make sure they are still up for matches. Call your doEaglesHaveMorale function.
doEaglesHaveMorale();

//Thinking about it further, shouldn’t we check to see if the Eagles still have morale after each time they lose a match? We could call the doEaglesHaveMorale function after each time they lose. But, there is an easier way to do that. Modify your reduceMorale function to call doEaglesHaveMorale after it has run all its other code.

const reduceMorale = (amount) => {
    eaglesMorale -= amount;
    doEaglesHaveMorale();
};

//Yes, you can call functions from almost anywhere, including from inside another function.
//It is important to know that functions can be set up to have as many parameters as you would like. In this next function, we will use two.
//Let’s create another function that allows 2 teams to shake hands with each other.

const shakeHands = function(team1, team2){
    console.log('The ${team1} and the ${team2} shake hands.')
}
shakeHands('Eagles', 'Dragons')
