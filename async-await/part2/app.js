$(function() {
    // 1.
    let baseURL = 'https://deckofcardsapi.com/api/deck';

    async function part1() {
        let data = await $.getJSON(`${baseURL}/new/draw/`);
        let { value, suit } = data.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    };
    part1();
    
    // 2.
    async function part2() {
        let firstCard = await $.getJSON(`${baseURL}/new/draw/`);
        let deckId = firstCard.deck_id;
        let secondCard = await $.getJSON(`${baseURL}/${deckId}/draw/`);
        cards = [firstCard, secondCard];
        cards.forEach(card => {
            let { value, suit } = card.cards[0];
            console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
        });
    };
    part2();

    // 3.

    async function setup() {
        let $btn = $('button');
        let $cardArea = $('#card-area');
    
        let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
        $btn.show().on('click', async function() {
            let card = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
            let cardImg = card.cards[0].image;
            $cardArea.append(
                $('<img>', {
                  src: cardImg
                })
            );
        });
    };
    setup();
});