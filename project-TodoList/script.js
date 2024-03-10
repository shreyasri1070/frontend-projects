const input_cont = document.getElementById("input_cont");
const li_cont = document.getElementById("li_cont");
function ADD_TASK() {
    if (input_cont.value === "") {
        window.alert("Enter the task");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input_cont.value;
        li_cont.appendChild(li);
        let time = document.createElement("time");
        const timestamp = Date.now();

        // Convert timestamp to a readable date and time format
        const currentDate = new Date(timestamp);

        // Formatting date 
        const formattedDate = currentDate.toLocaleString();

        // Printing Date and Time
        // in console
        time.innerHTML = `Task Date and Time: ${formattedDate}`;
        li.appendChild(time);
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);

    }
    input_cont.value = "";
    SaveData();
}
// function RemoveAll(){
//     let remove=document.getElementById("remove");
//     remove.addEventListener("click",)

// }
const removeall=document.getElementById("removeall");
// li_cont.addEventListener('click',function(event){
//    if(event.I=== "removeall"){
//      e.target.li_cont.remove();
//    } 
// },false);

input_cont.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        ADD_TASK();
    }
}, false);
function removeAll(){
    document.getElementById("li_cont").innerHTML = "";
}




li_cont.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        SaveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        SaveData();
    }
}, false);

function SaveData() {
    localStorage.setItem("data", li_cont.innerHTML);
}
function ShowData() {
    li_cont.innerHTML = localStorage.getItem("data");
}
ShowData();
