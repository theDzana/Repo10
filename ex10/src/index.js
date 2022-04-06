function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            relase_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            // Add a record here
            artist: "Red Hot Chili Peppers",
            title: "Californication",
            relase_year: 1999,
            formats: {
                1: "CD",
                2: "Vinyl",
                3: "LP"
            },
            gold: false,
        },
    };
    return myMusic;
}
myFunction()[2];
myFunction()[1];
console.log(myFunction()[2]);
console.log(myFunction()[1]);
module.exports = myFunction;