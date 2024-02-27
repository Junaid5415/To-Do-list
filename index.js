const input = document.querySelector('#input');
const button = document.querySelector('#button');
const ul = document.querySelector('ul')

// function to add task
function addTask(){
    if(input.value === ''){
        alert('Enter Value To Be Added')
    }else{
        li = document.createElement('li');
        li.textContent = input.value;
        ul.appendChild(li);
        const span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input.value = '';
    saveData()
}


ul.addEventListener('click', function(e){
    console.log(e);
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('check')
        saveData()
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
}, false);


function saveData(){
    localStorage.setItem('data', ul.innerHTML);
}

function showData(){
    ul.innerHTML = localStorage.getItem('data');
}


showData();