/*console.log("Hello world");
//objects in javascript
let data={
    name: "chavi",
    age: 20,

}*/
//const para=document.querySelector('.para')
//para.innerText ="newe wefvneufkbvnj"
//para.style.color="green"
//console.log(para)

//const para=document.getElementById("para") 
//para.innerText="newe wefvneufkbvnj"
//para.style.color="green"
//console.log(para)


//const para=document.getElementsByClassName("para") //return html collection
//para[0].innerText ="newe wefvneufkbvnj"
//para[1].style.color="green"
//console.log(para)


//querry selector all() : selects all returns nodfe list
//const para=document.querySelectorAll('.para')
//para[0].innerText ="newe wefvneufkbvnj"
//para[1].style.color="green"
//console.log(para)

//let.arr= [23,45,23,65,23]

//const newArr= arr.map((ele) => ele)  //itreturns a new array
//arr.forEach((ele)=> console.log(ele)) //it deos not returns a new array



//const container=document.querySelector(".container")
//container.innerHTML="<h1>hgfwhbfh</h1>"
//console.log(container)

//event handling
//btn.addEventListener('keyup', function(){alert("You have clicked the button")})

//function message(event)
//{
  //  console.log(event.key)
    //alert("You have clicked the button!")
//}

//const btn=document.querySelector("button")
//btn.classList.add("btn")
//btn.classList.remove("btn")


//btn.addEventListener('keyup', message)
//keydown
//click
//mouseover

// const from=document.querySelector("form")
// from.addEventListener('submit', function(){
    
//     console.log("form submitted")
// })

//btn.removeEventListener('click', message)

const conatiner=document.querySelector('.container')
const outer=document.querySelector('.couter')
const button=document.querySelector('button')

conatiner.addEventListener('click', ()=> {console.log('Div')}, true)
outer.addEventListener('click', ()=> {console.log('Outer Div')}, true)
button.addEventListener('click', ()=> {console.log('Button')}, true)








