/*
const lista = document.querySelector("ul.myList")

for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        const element = `<li style="color:purple;"> FizzBuzz ${i} </li>`
        lista.innerHTML += element

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
*/
const container = document.querySelector("myContainer");
const lista = document.querySelector("ul.myList")

for(let i = 1; i <= 100; i++ ){


    if(i % 3 === 0 && i % 5 === 0){
        const element = '<li class="box-fizzbuzz col-1"> FizzBuzz  </li>';
        lista.innerHTML += element;
    } else if (i % 3 === 0){
        const element = '<li class ="box-fizz col-1"> Fizz </li>';
        lista.innerHTML += element;
    } else if (i % 5 === 0){
        const element = '<li class= "box-buzz col-1"> Buzz </li>';
        lista.innerHTML += element;
    } else{
        const element = `<li class="box-num col-1"> ${i} </li>`;
        lista.innerHTML += element;
    }
        
    
}

