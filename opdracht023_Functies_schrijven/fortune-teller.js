//mijn oplossing:
const tellFortune = function (children, partner, location, jobTitle) {
    console.log('You will be be a ' + jobTitle
        + ' in ' + location
        + ', and married to ' + partner
        + ' with ' + children + ' kids.');
}

let totalFortune = tellFortune('3', 'jessica', 'india', 'teacher');
let totalFortune2 = tellFortune('5', 'james', 'germany', 'engineer');
let totalFortune3 = tellFortune('7', 'sara', 'england', 'soccerplayer');

/* gegeven oplossing in opdracht
const tellFortune = function (children, partner, location, jobTitle) {
    let future = 'You will be be a ' + jobTitle
        + ' in ' + location
        + ', and married to ' + partner
        + ' with ' + children + ' kids.';
    console.log(future);
}

tellFortune('2', 'john', 'the usa', 'swimmer') */