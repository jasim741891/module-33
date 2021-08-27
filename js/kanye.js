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


