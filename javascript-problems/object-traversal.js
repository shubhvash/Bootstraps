
// β Object Traversal in javascript
// π€ We will traverse this horse object and its methods 
const horse = {
    color: "Black",
    name: "Razor",
    behaviour: {
        actionTypes: {
            moveMethods: ["twist", "Jump", "Run"],
            twistAction() {
                console.log("Moved now");

            },
            jumpAction() {
                console.log("Jumped now");

            }
        },
        mood: "angry",
        ears: "closed"

    }
}

// π» Method to traverse the horse object
// We will use the π‘for...in loop
const traverseObj = (horse) => {
    for (let prop in horse) {
        if (typeof horse[prop] === 'object') {
            traverseObj(horse[prop])
        } else if (typeof horse[prop] === 'function') {
            horse[prop]();
        }
        else {
            console.log(horse[prop]);

        }
    }
}

traverseObj(horse);

// --------------------------------------------
// πOutput
// --------------------------------------------
// Black βββββ
// Razor
// twist ββββββ
// Jump 
// Run βββββ
// Moved 
// Jumped 
// angry βββββ
// closed βββββ
// --------------------------------------------

// -----------------------------
// π MSK | Web development
// π¨βπ» Author - Manoj Satishkumar
// -----------------------------
// β€ You should enjoy coding
// -----------------------------