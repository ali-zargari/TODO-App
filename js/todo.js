import {init, modifyContainer, addElement, generateGrid} from "./tools.js";

let currentTodo = '';
let size = 0;

let todo_list = [];

let Todo = function Todo (ed, td){
    let end_date = ed;
    let todo = td;
    let done = false;
    let priority = 0;
};



function m(){
    //document.querySelector('.task'+'').addEventListener('')
    document.getElementsByClassName('todo')[0].addEventListener('change', function (e){
        saveText(e);
    });

    document.getElementsByClassName('add')[0].addEventListener('click', function (e){
        addEntry(e);
    });
};

let saveText = (e) =>{
    addElement('div','entry',e.srcElement);
    currentTodo = document.getElementsByClassName('todo'+'').item(0).cloneNode(true);
};


let addEntry = () => {
    console.log('here');
    let list = document.querySelector('.list'+'');
    let newEntry = addElement('div','entry',list);
    newEntry.innerHTML = currentTodo.value;
    newEntry.id = size;
    size++;
};

window.saveText= saveText;

m();