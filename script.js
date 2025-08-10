import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

const firebaseConfig = {
    databaseURL : "https://leads-tracker-app-49ace-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

let inputEl = document.getElementById("text-el")

let ulEl = document.getElementById("ul-el")


let saveBtn = document.getElementById("save-btn")
saveBtn.addEventListener("click" , function(){
    inputEl.value = ""
})

const deleteBtn = document.getElementById("delete-btn")
deleteBtn.addEventListener("dblclick",function(){
    ulEl.innerHTML = ""
})


function render(leads){
    let element = ""
    for (let i = 0; i < leads.length; i++) {
        element += 
        `<a href="${leads[i]}" target = "_blank">
            <li>
                ${leads[i]}
            </li>
        </a>`
    }
    ulEl.innerHTML = element
}
