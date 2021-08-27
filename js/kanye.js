// lesson-01
const loadQuoe = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}
const displayQuote = quote => {
    console.log(quote.quote)
    const quoteElement = document.getElementById('quote')
    quoteElement.innerText = quote.quote
}

// lesson - 02

const loadBuddys = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddy(data))
}
loadBuddys()

const displayBuddy = jamalas => {
    const jasimData = jamalas.results
    const div = document.getElementById('body')
    for (const jamala of jasimData) {
        const p = document.createElement('p')
        p.innerText = `name: ${jamala.name.title} ${jamala.name.first} ${jamala.name.last
            } `
        div.appendChild(p)
    }
}

