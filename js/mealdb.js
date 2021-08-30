const seachFood=async ()=>{
    const searchField=document.getElementById('search-input');
    const searchText=searchField.value
    // console.log(searchText)
    searchField.value=''
    const errorDiv=document.getElementById('display-error')
    const mealDiv=document.getElementById('display-meal')
    const searchElemet=document.getElementById('search-box')
searchElemet.textContent=''
    // mealDiv.style.display='none'
    mealDiv.textContent=''
    errorDiv.textContent=''
    if(searchText==''){  
        errorDiv.textContent=''
        const p=document.createElement('p')
        p.className=`bg-danger text-white my-4 py-3 px-2 text-center rounded-3`
        p.innerText='Please type a word'
        errorDiv.appendChild(p)
        errorDiv.style.display='block'
    }
    else {
       try{    
        document.getElementById("spinner").classList.remove("d-none");  
        errorDiv.style.display='none'
        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        // console.log(url);
    const res=await fetch(url)
    const data=await res.json()
    searchBox(data.meals)}
    catch(error){
displayError()
    }
    
        // fetch(url)
        // .then(res=> res.json())
        // .then(data=>searchBox(data.meals))
        //.catch(displayError())
    }
}
const displayError=()=>{
    const errorDiv=document.getElementById('display-error')
    errorDiv.textContent=''
        const p=document.createElement('p')
        p.className=`bg-black text-white my-4 py-3 px-2 text-center rounded-3`
        p.innerText="Your Http link doesn't work properly"
        errorDiv.appendChild(p)
        errorDiv.style.display='block'
}
const searchBox=meals=>{
    console.log(meals)
    const searchElemet=document.getElementById('search-box')
    searchElemet.textContent='' //--clean element serch 
    document.getElementById("spinner").classList.add("d-none");

   meals.forEach(meal=>{
    const div=document.createElement('div')
    div.className='col'
    div.innerHTML=` 
    <div onclick="mealDetails(${meal.idMeal})" class="card h-75  ">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="..." width="40%" height="55%">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
      </div>
    </div>`
    searchElemet.appendChild(div)

   })
}
// meal details 
const mealDetails=async (meal)=>{
    window.scroll(0,100) //window scroll
// console.log(meal)
const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`
//async and await use
const res= await fetch(url)
const data=await res.json()
displayDetails(data.meals[0])
// fetch(url)
// .then(res=>res.json())
// .then(data=>displayDetails(data.meals[0]))
}
const displayDetails =meal=>{
 console.log(meal)
 const displayMeal=document.getElementById('display-meal')
 displayMeal.textContent='' //-- clear the element
 const div=document.createElement('div')
div.className='card'
div.innerHTML=` <img src="${meal.strMealThumb}" class="card-img-top w-100 h-100" alt="..." >
<div class="card-body">
  <h5 class="card-title">${meal.strMeal}</h5>
  <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
</div>`
displayMeal.appendChild(div)
}

