const countValue = document.querySelector('#counter');


const increment = ()=>{
     // convert value into integer
     let value = parseInt(countValue.innerText)
     // increase value by 1
     value = value + 1
     // print the value in result
     countValue.innerText = value
}



const decrement = ()=>{
     // convert value into integer
     let value = parseInt(countValue.innerText)
     // increase value by 1
     value = value - 1
     // print the value in result
     countValue.innerText = value
}