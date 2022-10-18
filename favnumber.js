const baseURL = "http://numbersapi.com";
let num = 0;
let numbers = [1, 3, 4, 70, 4008];

//1:
$.getJSON(`${baseURL}/${num}/trivia?json`)
    .then(data => {console.log(data);});

//2:
$.getJSON(`${baseURL}/${numbers}/trivia?json`)
    .then(data => {console.log(data);});

//3:
let fourFacts = [];
for (let i = 1; i < 5; i++){
    fourFacts.push(axios.get(`${baseURL}/${i}/trivia?json`));
}

Promise.all(fourFacts)
    .then(facts => {facts.forEach(data => $('body').append(`<p>${data.text}</p>`));})