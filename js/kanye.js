const loadQuotes=()=>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=>loadData(data))
}

const loadData=quote=>{
    const blockQuote=document.getElementById('quotes')
    blockQuote.innerText=quote.quote
}