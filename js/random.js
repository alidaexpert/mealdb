const randomUser=()=>{
    fetch('https://randomuser.me/api/')
    .then(res=>res.json())
    .then(data=>loadData(data))
}
randomUser()

const loadData=users=>{
   console.log(users.results[0])
   const randomUsers=document.getElementById('users')
  const img =randomUsers.innerText=users.results[0].picture.large
  randomUsers.innerHTML=`<img class="border border-5 border-danger rounded-circle" src="${img}">`
 
  userDetails(users)
}

const userDetails=users=>{
    const textTitle=document.getElementById('textTitle')
    textTitle.style.color='red'
    const text=document.getElementById('text')
  //   user name
  const title=users.results[0].name.title
        const firstName=users.results[0].name.first
        const lastName=users.results[0].name.last
        textTitle.innerText='User Full Name'
        text.innerText=`${title} ${firstName} ${lastName}`
    document.getElementById('userName').addEventListener('mouseenter',function(){
        textTitle.innerText='User Full Name'
       text.innerText=`${title} ${firstName} ${lastName}`
          })
    document.getElementById('email').addEventListener('mouseenter',function(){
        textTitle.innerText='User Email Address'
        const email=users.results[0].email
       text.innerText=`${email}`
          })
    document.getElementById('birth').addEventListener('mouseenter',function(){
        textTitle.innerText='User Date Of Birth'
        const birth=users.results[0].dob.date
        const date=new Date(birth).toISOString().slice(0,10)
        const age=users.results[0].dob.age
      text.innerText=`${date}`
          })
    document.getElementById('location').addEventListener('mouseenter',function(){
        textTitle.innerText='User Location'
        const streetNumber=users.results[0].location.street.number
        const streetName=users.results[0].location.street.name
        const stateName=users.results[0].location.state
      text.innerText=`${streetNumber} ${streetName} ${stateName}`
          })
    document.getElementById('phone').addEventListener('mouseenter',function(){
        textTitle.innerText='User Phone Number'
        const phone=users.results[0].phone
      text.innerText=`${phone}`
          })
    document.getElementById('password').addEventListener('mouseenter',function(){
        textTitle.innerText='User Password'
        const password=users.results[0].login.password
      text.innerText=`${password}`
          })
          // clean after reload
  // textTitle.innerText=''
  // text.innerText=''
}


