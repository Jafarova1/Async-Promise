// "use strict"

// let students = [
//     {
//         name: "Musa",
//         surname: "Afandiyev",
//         age: 19
//     },
//     {
//         name: "Ramil",
//         surname: "Allahverdiyev",
//         age: 26
//     },
//     {
//         name: "Resul",
//         surname: "Hesebov",
//         age: 15
//     },
//     {
//         name: "Novreste",
//         surname: "Aslanzade",
//         age: 25
//     },
//     {
//         name: "Gultaj",
//         surname: "Jafarova",
//         age: 18
//     },

// ]


// getStudentsByFilter("r")

// function getStudentsByFilter(str) {
//  setTimeout(() => {
//     let result=students.filter(m=>m.name.includes(str));
//     console.log(result)
//  }, 3000);

// }

let elem = document.querySelector("ul")

// createStudent({ name: "Anar", surname: "heseneov", age: 36 }, getStudents)



// function getStudents() {
//     setTimeout(() => {
//         let str="";
//         students.forEach(stu => {
//             str+=`<li class="list-group-item"><b>${stu.name}</b><b>${stu.surname}</b></li>`


//         });
//         elem.innerHTML=str;

//     }, 2000);
// }



// function createStudent(student) {
//     return new Promise ((resolved,rejected)=>{
//     setTimeout(() => {
//         students.push(student);
//         let err=false;
//         if(!err){
//             resolved(students);
//         }
//         else{
//             rejected("something is wrong");
//         }

//     }, 3000);

// })

// }


// createStudent({ name: "Anar", surname: "heseneov", age: 36 }, getStudents).then(response=>{
//     console.log(response)
// }).catch(err=>{
//     console.log(err)
// })



// getAllPost()

// function getAllPost() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(posts => {
//             let str = ""

//             posts.forEach(post => {
//                 str += `<tr data-id=${post.id} data-bs-toggle="modal" data-bs-target="#exampleModal">
//         <td>${post.id}</td>
//         <td>${post.userid}</td>
//         <td>@${post.title}</td>
//         <td>${post.body}</td>
//       </tr>`
//             });

//             document.querySelector("tbody").innerHTML = str;



//         })

// }

// setTimeout(() => {
//     let elems = document.querySelectorAll("tbody tr")
//     elems.forEach(elem => {
//         elem.addEventListener("click", function () {
//             let id = parseInt(this.getAttribute("data-id"))
//             fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//                 .then(response => response.json())
//                 .then(post =>{
//                     document.querySelector(".modal-header h5").innerText=post.title;
//                     document.querySelector(".modal-body").innerText=post.body
//                 })


//         })

//     });

// }, 2000);


// async function getPosts(){
//     let data= await fetch('https://jsonplaceholder.typicode.com/posts')
   
//     let response= await data.json();

// }

// getPosts();



$(function(){
    $("button").click(function(){
        $.ajax({url: "https://jsonplaceholder.typicode.com/posts", success: function(result){
         console.log(result)
        }});
      });
})












