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