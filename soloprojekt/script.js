let home = document.getElementById("id1");
let homescore = 0;

let guest = document.getElementById("guest");
guestscore = 0;



function add1() {
    homescore += 1
    home.innerHTML = homescore
}


function add2() {
    homescore += 2
    home.innerHTML = homescore
}


function add3() {
    homescore += 3
    home.innerHTML = homescore
}



function addGuest1() {
    homescore += 1
    home.innerHTML = homescore
}



function addGuest1() {
    guestscore += 1;
    guest.innerHTML = guestscore;
}


function addGuest2() {
    guestscore += 2;
    guest.innerHTML = guestscore;
}


function addGuest3() {
    guestscore += 3;
    guest.innerHTML = guestscore;
}

function reset() {

// location.reload();
homescore = 0;
guestscore = 0;
home.innerHTML = 0;
guest.innerHTML = 0;
}
