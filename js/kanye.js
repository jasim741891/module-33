// lesson-01

/*
const loadQuoe = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}
const displayQuote = quote => {
    console.log(quote.quote)
    const quoteElement = document.getElementById('quote')
    quoteElement.innerText = quote.quote
} */



// lesson - 02

/*
const loadJasim = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayJasim(data))
}
loadJasim()

const displayJasim = saw => {
    // console.log(saw.results)
    const bodys = saw.results;
    // রাখার জায়গা connenet
    const divContainer = document.getElementById('main');
    for (const body of bodys) {
        // console.log(body.email) / দেখানোর জন্য ইলিমেন্ট তরি
        const p = document.createElement('p')
        //এই টেক্স  কি প্রকিতির এবং ফরলোপের ভেরিয়েবল নিয়ে ডট এবং এরো থেকে কি চাই
        p.innerText = `name: ${body.name.title} ${body.name.first} ${body.name.last}  Email: ${body.email}
    
    `
        // এরপর কিয়েট করা পেরাগেরাপ এপেন্ট করতে হবে আইডি যেখানে আছে তার ভেরিয়েবল ডট করে  
        divContainer.appendChild(p);

    }

}
 */

// lesson-03

const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayContaries(data))
}
loadCountries()

const displayContaries = contries => {
    // console.log(contries)
    // ফর লোপ দুই ভাবে করা যায় যেমন for(of), arrow function er parameter and dote korea forEach
    const divContent = document.getElementById('countries')
    contries.forEach(contry => {
        // console.log(contry)
        const div = document.createElement('div')
        div.classList.add('contry')
        div.innerHTML = `<h3>${contry.name}</h3>
        <p>${contry.capital}</p>
        <button onclick="loadCountryByName('${contry.name}')">Detials</button>
        `
        // const h3 = document.createElement('h3')
        // const p = document.createElement('p')
        // h3.innerText = contry.name;
        // div.appendChild(h3);
        // p.innerText = contry.capital;
        // div.appendChild(p);
        divContent.appendChild(div)
    })
}
const loadCountryByName = name => {
    // console.log(name)
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}
const displayCountryDetail = country => {
    console.log(country)
    const countriesDetails = document.getElementById('countries-details');
    countriesDetails.innerHTML = `
    <h4>${country.name}</h4>
    <p>population:${country.population}</p>
    <img width="200px" src="${country.flag}">
   

    `
}


