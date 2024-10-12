// 1.
let favNumber = 19;
let baseURL = "http://numbersapi.com";

$.getJSON(`${baseURL}/${favNumber}?json`)
    .then(data => {
        console.log(data);
        document.body.innerHTML += `<p>${data.text}</p>`
    }
);

// 2.
let favNumbers = [9, 23, 13, 7];
$.getJSON(`${baseURL}/${favNumbers}?json`)
    .then(data => {
        console.log(data);
        favNumbers.forEach(num => {
            document.body.innerHTML += `<p>${data[num]}</p>`
        });
    }
);

// 3.
Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${baseURL}/${favNumber}?json`);
    })
).then(facts => {
    facts.forEach(fact => console.log(`<p>${fact.text}</p>`));
    facts.forEach(fact => $("body").append(`<p>${fact.text}</p>`));
});