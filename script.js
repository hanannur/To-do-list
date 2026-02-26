const inputfield=document.getElementById("inputbox");
const addbtn=document.getElementById("addbtn");
const addedlist=document.getElementById("lists");

function buttonclick(){
if (inputfield.value==="" ){
        alert("Please enter a task");
        return; 
    }
    addedlist.innerHTML += `<div class="item">
    <input type="checkbox" class="task-checkbox">
    <span id="taskname">${inputfield.value}</span>
    <div class="actions">
                <i class="fa-solid fa-pen edit-icon"></i>
                <i class="fa-solid fa-trash delete-icon"></i>
            </div>
    </div>`;
    
    inputfield.value="";
}

addbtn.addEventListener("click" , buttonclick);

// addedlist.addEventListener("click" , function(e){   
//     if(e.target.classList.contains("edit-icon")){
//         const taskname = e.target.parentElement.previousElementSibling;
//         const newtaskname = prompt("Edit your task", taskname.innerText);       
//         if (newtaskname !== null && newtaskname.trim() !== "") {
//             taskname.innerText = newtaskname;
//         }   
//     } else if(e.target.classList.contains("delete-icon")){
//         const task = e.target.parentElement.parentElement;
//         addedlist.removeChild(task);
//     }   
// });

