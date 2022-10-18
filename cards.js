const baseURL = 'https://deckofcardsapi.com/api/deck';

//1.
$.getJSON(`${baseURL}/new/draw/`)
    .then (data => {
        let {suit, value} = data.cards[0];
        console.log(`${value} of ${suit}`);
    });

//2.
let firstCard = null;
$.getJSON(`${baseURL}/new/draw`)
    .then (data => {
        firstCard = data.cards[0];
        deckId = data.deck_id;
        return $.getJSON(`${baseURL}/${deckId}/draw`);
    })
    .then (data =>{
        secondCard = data.cards[0];
        [firstCard, secondCard].forEach(function(card){
            console.log(`${card.value} of ${card.suit}`);
        });
    });

//3.
let deckId = null;
let $button = $('button');
let $cardZone = $('#cardzone');

$.getJSON(`${baseURL}/new/shuffle`)
    .then(data => {
        deckId = data.deck_id;
        $button.show();
    })

$button.on('click', function(){
    $.getJSON(`${baseURL}/${deckId}/draw`).then(data => {
        $cardZone.append(
            `<img src = ${data.cards[0].image}>`
        )
    })
})
