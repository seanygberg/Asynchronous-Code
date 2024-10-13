// 1.
let favNumber = 19;
let favNumbers = [7, 13, 19, 23];
let baseURL = "http://numbersapi.com";

async function part1() {
    let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
    console.log(data);
    document.body.innerHTML += `<p>${data.text}</p>`;
}
part1()

async function part2() {
    let data = await $.getJSON(`${baseURL}/${favNumbers}?json`);
    console.log(data);
    favNumbers.forEach(num => {
        document.body.innerHTML += `<p>${data[num]}</p>`
    });
}
part2()

async function part3() {
    const promises = Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`));
    const facts = await Promise.all(promises);
    facts.forEach(fact => {
        console.log(fact);
        document.body.innerHTML += `<p>${fact.text}</p>`
    });
}
part3()