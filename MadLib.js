/*
 Eli Watson's Mad-Lib Generator
 TODO:
 -Let users input words
 done-add diffrent stories that are also randomized
 done-actual good html that inserts it into the document instead of just displaying the console
 -get better at coding so this isn't a hot mess
*/

const adjectives = ["Dirty", "Ugly", "Big", "Small", "Stinky", "Shiny", "Happy", "Sad", "Bright", "Dark", "Quiet", "Loud", "Strong", "Weak", "Clever"];
const verbs = ["Run", "Jump", "Swim", "Smell", "Look", "Sleep", "Sail", "Dig", "Fly", "Think", "Eat", "Sing", "Dance", "Read"];
const nouns = ["Apple", "Boot", "Boy", "Girl", "Watch", "Phone", "Cat", "Dog", "House", "Car", "Tree", "Book", "Computer", "River", "Mountain"];
const numbers = [1, 2, 45, 78, 80, 99, 7, 5, 10, 25, 50, 75, 100, 200, 500];
const colors = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Black", "White", "Gray", "Brown", "Cyan", "Magenta", "Teal", "Lime"];
let storyNum = 0
const randomWordSet = randomWords(adjectives, verbs, nouns, numbers, colors);

//Function gets words from arrays and gets a random word. 
//There are so many becuase thats the solorion to not having the same adj. in evrey sentence and 6 seemed like enough
function randomWords(adjectives, verbs, nouns, numbers, colors,) {
    return {
        // random words 1-6
        randomAdj1: adjectives[Math.floor(Math.random() * adjectives.length)],
        randomVerb1: verbs[Math.floor(Math.random() * verbs.length)],
        randomNoun1: nouns[Math.floor(Math.random() * nouns.length)],
        randomNum1: numbers[Math.floor(Math.random() * numbers.length)],
        randomCol1: colors[Math.floor(Math.random() * colors.length)],
        
        randomAdj2: adjectives[Math.floor(Math.random() * adjectives.length)],
        randomVerb2: verbs[Math.floor(Math.random() * verbs.length)],
        randomNoun2: nouns[Math.floor(Math.random() * nouns.length)],
        randomNum2: numbers[Math.floor(Math.random() * numbers.length)],
        randomCol2: colors[Math.floor(Math.random() * colors.length)],

        randomAdj3: adjectives[Math.floor(Math.random() * adjectives.length)],
        randomVerb3: verbs[Math.floor(Math.random() * verbs.length)],
        randomNoun3: nouns[Math.floor(Math.random() * nouns.length)],
        randomNum3: numbers[Math.floor(Math.random() * numbers.length)],
        randomCol3: colors[Math.floor(Math.random() * colors.length)],

        randomAdj4: adjectives[Math.floor(Math.random() * adjectives.length)],
        randomVerb4: verbs[Math.floor(Math.random() * verbs.length)],
        randomNoun4: nouns[Math.floor(Math.random() * nouns.length)],
        randomNum4: numbers[Math.floor(Math.random() * numbers.length)],
        randomCol4: colors[Math.floor(Math.random() * colors.length)],

        randomAdj5: adjectives[Math.floor(Math.random() * adjectives.length)],
        randomVerb5: verbs[Math.floor(Math.random() * verbs.length)],
        randomNoun5: nouns[Math.floor(Math.random() * nouns.length)],
        randomNum5: numbers[Math.floor(Math.random() * numbers.length)],
        randomCol5: colors[Math.floor(Math.random() * colors.length)],

        randomAdj6: adjectives[Math.floor(Math.random() * adjectives.length)],
        randomVerb6: verbs[Math.floor(Math.random() * verbs.length)],
        randomNoun6: nouns[Math.floor(Math.random() * nouns.length)],
        randomNum6: numbers[Math.floor(Math.random() * numbers.length)],
        randomCol6: colors[Math.floor(Math.random() * colors.length)]
        
    };
}

// Actually make the mad lib
function madLib(words, storyNum) {
    storyNum = Math.floor(Math.random() * 4);
    let result = "";   
    // switch betwen diffrent storys
    switch (storyNum) {
        case 0:
            result += `A <span style="color: red">${words.randomAdj1}</span> <span style="color: red">${words.randomNoun1}</span> decided to <span style="color: red">${words.randomVerb1}</span> through the <span style="color: red">${words.randomAdj2}</span> woods. Everything looked <span style="color: red">${words.randomCol1}</span>, and it felt <span style="color: red">${words.randomAdj3}</span>. After <span style="color: red">${words.randomNum1}</span> minutes, the <span style="color: red">${words.randomNoun2}</span> found a <span style="color: red">${words.randomAdj4}</span> creature that started to <span style="color: red">${words.randomVerb2}</span>.`;
            break;
        case 1:
            console.log('Case 1 not implemented, skipping');
            // break;
        case 2: 
            console.log('Case 2 not implemented, skipping');
            // break;
        case 3:
            result += `One day, a <span style="color: red">${words.randomAdj1}</span> <span style="color: red">${words.randomNoun1}</span> decided to <span style="color: red">${words.randomVerb1}</span> through the <span style="color: red">${words.randomAdj2}</span> forest. The sky was a deep shade of <span style="color: red">${words.randomCol1}</span> and everything felt <span style="color: red">${words.randomAdj3}</span>. After walking for <span style="color: red">${words.randomNum1}</span> hours, the <span style="color: red">${words.randomNoun2}</span> found a <span style="color: red">${words.randomAdj4}</span> castle hidden among the trees. Inside, there was a <span style="color: red">${words.randomNoun3}</span> that started to <span style="color: red">${words.randomVerb2}</span> when it saw the visitor. 'I haven't seen anything so <span style="color: red">${words.randomAdj5}</span> in all my life!' it exclaimed. Feeling <span style="color: red">${words.randomAdj6}</span>, the <span style="color: red">${words.randomNoun4}</span> decided to <span style="color: red">${words.randomVerb3}</span> and head back home, dreaming of <span style="color: red">${words.randomNum2}</span> more adventures to come.`;
            break;
    }
    return result;
}




// inputs the output of madLib() into the div app or if for some reason it isn's working, gives a tip
// Also has a varible refresh and if then statements to display an error code if it cannot get the madlib after 2 refreshes
function displayMadlib() {
    const madLibApp = document.getElementById('madLib');
    const refresh = 0;
    if (madLibApp) {
        const newRandomWordSet = randomWords(adjectives, verbs, nouns, numbers, colors);
        madLibApp.innerHTML = madLib(newRandomWordSet);
    } else {
        madLibApp.innerHTML = `<p>No Mad-Libs Generated, Try Refreshing!</p>`;
        refresh += 1;
        if (refresh == 2) {
            madLibApp.innerHTML = `<p>Still no luck? Try contacting the maintainer.</p>`;
        }
    }
}


document.addEventListener('DOMContentLoaded', displayMadlib);