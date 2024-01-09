
const lista = document.querySelector("ul.myList")

for(let i = 0; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        const element = `<li> FizzBuzz ${i} </li>`
        lista.innerHTML += element
        element.style.color = "purple"

    } else if(i % 3 === 0 ) {
        const element = `<li style="color: red;"> Fizz ${i} </li>`
        lista.innerHTML += element  

    } else if ((i % 5) === 0){
        const element = `<li style="color: blue;"> Buzz ${i} </li>`
        lista.innerHTML += element
         
    } else{
        const element = `<li style="color: black;"> ${i} </li>`
        lista.innerHTML += element
    }
    
    
}