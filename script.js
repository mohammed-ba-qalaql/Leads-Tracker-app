import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getDatabase, ref, push, onValue} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

const firebaseConfig = {
    databaseURL : "https://leads-tracker-app-49ace-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const referenceInDB = ref(database,"leads")

let inputEl = document.getElementById("text-el")

let ulEl = document.getElementById("ul-el")

onValue(referenceInDB, function(snapshot){
    console.log(snapshot.val())
})

let saveBtn = document.getElementById("save-btn")
saveBtn.addEventListener("click" , function(){
    push(referenceInDB, inputEl.value)
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
