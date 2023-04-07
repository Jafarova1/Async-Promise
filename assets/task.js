"use strict"


let button=document.querySelector("button")

getComments()


function getComments(){
  
    button.addEventListener("click",function(){
    
        fetch('https://jsonplaceholder.typicode.com/comments')
          .then(response => response.json())
          .then(comments =>{
            let str=""
          
            comments.forEach(comment => {
                str+=`<tr>
                <td>${comment.id}</td>
                <td>${comment.postId}</td>
                <td>${comment.name}</td>
                <td>${comment.email}</td>
                <td>${comment.body}</td>
            </tr>`
                
            });
            document.querySelector("tbody").innerHTML = str;
          })
         
    })
    
}




