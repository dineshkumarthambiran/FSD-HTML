// function validate()
// {
//     let username = document.getElementById("username") ;
//     let password = document.getElementById("password")
    
//     if ( username.value == "Dinesh" && password.value == "1234" )
//     { 
//         alert("login success")
//     }
//     else
//     {
//         alert("login failed")
//     }
// }

// let result = ""
// let num1=0, num2=0
// function add(){
//     num1 = parseInt(document.getElementById("num1").value)
//     num2 = parseInt(document.getElementById("num2").value)

//     result = "Sum = "+(num1+num2)

//     let output = document.getElementById("output")
//     output.innerText = result

// }


// function sub(){
//     let num1 = parseInt(document.getElementById("num1").value)
//    let num2 = parseInt(document.getElementById("num2").value)

//     let result = "Sum = "+(num1-num2)

//     let output = document.getElementById("output")
//     output.innerText = result

// }

// let result = ""
// let num1=0, num2=0
// function multi(){
//     num1 = parseInt(document.getElementById("num1").value)
//     num2 = parseInt(document.getElementById("num2").value)

//     result = "Sum = "+(num1*num2)

//     let output = document.getElementById("output")
//     output.innerText = result

// }


// let a=0 ;
//  function change()
//  {
//     if(a==0)
//     {document.all[7].children[0].innerText="Java script FSD";
//     a=1}

//     else 
//    { document.all[7].children[0].innerText="Java course";
//     a=0 }
// }

// function menu()
// {let newcode = `
// <ul>
//   <li>dosa</li>
//    <li>idly</li>
//    <li>chapathi</li>
// </ul>
// `
// let menu = document.getElementById("menu")
// menu.innerHTML=newcode
// }

// function showalert()
// {
//     alert("i got super power")
// }

// function givepower(){
//     let mypower = document.getElementById("givepower")
//     mypower.innerText="i got superpower"
//     mypower.addEventListener("click",showalert())


// }

function displaynew(){

let ul = document.createElement("ul")
let item1=document.createElement("item1")
item1.innerText = "idly"
let item2=document.createElement("item2")
item2.innerText = "dosa"
let item3=document.createElement("item3")
item3.innerText = "chapathi"

ul.appendChild(item1)
ul.appendChild(item2)
ul.appendChild(item3)

let container = document.getElementById("container")
container.appendChild(ul)

}