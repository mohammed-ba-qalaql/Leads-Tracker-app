import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

const firebaseConfig = {
    databaseURL : "https://leads-tracker-app-49ace-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const referenceInDB = ref(database,"leads")

let inputEl = document.getElementById("text-el")

let ulEl = document.getElementById("ul-el")

onValue(referenceInDB, function(snapshot){
    const snapshotExist = snapshot.exists()
    if(snapshotExist){
        const snapshotValues = snapshot.val()
        const leads = Object.values(snapshotValues)
        render(leads)
    }
    
})

let saveBtn = document.getElementById("save-btn")
saveBtn.addEventListener("click" , function(){
    push(referenceInDB, `https://${inputEl.value}`)
    inputEl.value = ""
})

const deleteBtn = document.getElementById("delete-btn")
deleteBtn.addEventListener("dblclick",function(){
    remove(referenceInDB)
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
