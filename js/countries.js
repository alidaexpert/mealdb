const country=()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>loadData(data))
}
country()

const loadData=country=>{
    // console.log(country)
    country.forEach(x=>{
        console.log(x)
const text=document.getElementById('text')
const div=document.createElement('div')
div.style.display='flex'
const h5=document.createElement('h5')
h5.classList.add('country','common')
h5.innerText=x.name
div.appendChild(h5)
const p=document.createElement('p')
p.innerText=x.capital
p.classList.add('capital','common')
div.appendChild(p)
const p2=document.createElement('p')
p2.innerText=x.population
p2.classList.add('capital','common')
div.appendChild(p2)
const p1=document.createElement('p')
p1.innerText=x.region
p1.classList.add('capital','common')
div.appendChild(p1)
const p3=document.createElement('p')
p3.innerText=x.alpha3Code
p3.classList.add('capital','common')
div.appendChild(p3)
const img=document.createElement('img')
img.classList.add('flag','common')
const imageLink=x.flag
img.src=`${imageLink}`
div.appendChild(img)
text.appendChild(div)

    })
   
 }