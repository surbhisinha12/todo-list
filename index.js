const  taskinput = document.getElementById("task");
const listContainer = document.getElementById("list");
const reset_b = document.getElementById("reset_button");
function addtask(){
    if(taskinput.value === ''){
        return false;
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = taskinput.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#x1F5D1;";
        span.className = "delete-task";     
        li.appendChild(span);
            }
        taskinput.value = "";
        saveData();
        
}
function reset(){
while(listContainer.firstChild){
    listContainer.removeChild(
        listContainer.firstChild
    );
}   

}
reset_b.addEventListener('click',reset);
taskinput.addEventListener('keypress', function(event) {
if (event.key === 'Enter') {
    addtask();
}
});
addBtn.addEventListener('click' , addtask);
listContainer.addEventListener("click", function(e){
    if( e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();

    }
    else if (e.target.tagName === "SPAN" ){
    e.target.parentElement.remove();
    saveData();
    }

},true);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML );
    
}
function showTask(){
    listContainer.innerHTML= localStorage.getItem("data");
}
showTask();
