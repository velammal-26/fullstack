console.log("HI")
const a = 10;
console.log(a)
const b ="String";
console.log(b)

const arr = [1,2.1,"something",false]
console.log(arr)

arr[1]=3.1
console.log(arr[1])

arr.push(4)
console.log(arr)

arr.pop()
console.log(arr)    

function greet(name){
    console.log("Hello "+name)
}
greet("Alice")


function add(a,b){
    return a+b;
}
console.log(add(5,3))

const first = document.getElementById("ptag")
first.innerHTML ="Paragraph"

const input = document.getElementById("input")
const output = document.getElementById("inputField")

input.addEventListener("input",()=>{
    output.textContent=input.value
})

const ptag = document.createElement("p")
ptag.textContent = "Some text"
document.body.appendChild(ptag)