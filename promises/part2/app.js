$(function() {
    let baseURL = 'https://deckofcardsapi.com/api/deck';

    // 1.
    $.getJSON(`${baseURL}/new/draw/`).then(deck => {
        let { value, suit } = deck.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    });

    // 2.
    let firstCard = null;
    $.getJSON(`${baseURL}/new/draw/`).then(deck => {
        firstCard = deck.cards[0];
        let deckID = deck.deck_id;
        return $.getJSON(`${baseURL}/${deckID}/draw/`);
    }).then(deck => {
        let secondCard = deck.cards[0];
        let cards = [firstCard, secondCard];
        cards.forEach(card => {
            console.log(
                `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
            );
        });
    });

    // 3.
    
    let deckId = null;
    let $btnArea = $('button');
    let $cardArea = $('#card-area');

    $.getJSON(`${baseURL}/new/shuffle/`).then(data => {
        deckId = data.deck_id;
        $btnArea.show();
    });

    $btnArea.on('click', function() {
        $.getJSON(`${baseURL}/${deckId}/draw/`).then(deck => {
            let cardImg = deck.cards[0].image;
            $cardArea.append(
                $('<img>', {
                    src: cardImg
                })
            );
            if (deck.remaining === 0) {
                $btnArea.remove();
            };
        });
    });
});
  