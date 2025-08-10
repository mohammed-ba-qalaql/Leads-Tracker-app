import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

const firebaseConfig = {
    databaseURL : "https://leads-tracker-app-49ace-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

let inputEl = document.getElementById("text-el")

let myLeads = [];

let ulEl = document.getElementById("ul-el")

let localLeads = JSON.parse(localStorage.getItem("myLeads"))
if(localLeads){
    myLeads = localLeads
    render(myLeads)
}

let saveBtn = document.getElementById("save-btn")
saveBtn.addEventListener("click" , function(){
    myLeads.push(inputEl.value);
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    inputEl.value = ""
})

const deleteBtn = document.getElementById("delete-btn")
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
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
