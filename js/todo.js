const boxel = document.getElementById('box');
const listcontainerel = document.getElementById('listcontainer');
const mainel = document.getElementById("main");

function addTask(){
    if(boxel.value === ''){
        //alert('No task added!');
        let notask = document.createElement("span");
        notask.innerHTML = "No task entered, try again!";
        mainel.appendChild(notask);
        

    }
    else {
        
        let li = document.createElement("li");
        li.innerHTML = boxel.value;
        listcontainerel.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        boxel.value='';
        mainel.removeChild(notask);
        saveData();
    }
}

listcontainerel.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
}, false);

function saveData(){
    localStorage.setItem("data", listcontainerel.innerHTML);
}

function showData(){
    listcontainerel.innerHTML = localStorage.getItem("data");
}

saveData();