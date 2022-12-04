function fetchRecords(){
    fetch('https://jsonplaceholder.typicode.com/todos')
.then(function(result){
    // console.log("Before conversion");
    if(result.ok){
        console.log("Data retrieval successful!");
    }
    else{
        console.log("Data retrieval failed!");
    }
    return result.json()
})
.then(function(todos){
    let content = ''
    let container = document.getElementById("container")
    for(let todo of todos){
        content = content+`<p> User Id: ${todo.userId}, Id: ${todo.id}, Title: ${todo.title}, Completed: ${todo.completed}  </p>`
        // container.innerText = todo
    }
    container.innerHTML = content
})
}