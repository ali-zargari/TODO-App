import {init, modifyContainer, addElement, generateGrid} from "./tools.js";

let currentTodo = '';

function m(){
    //document.querySelector('.task'+'').addEventListener('')
    document.getElementsByClassName('task')[0].addEventListener('change', function (e){
        saveText(e);
    });

    document.getElementsByClassName('add')[0].addEventListener('click', function (e){
        addEntry(e);
    });
};

let saveText = (e) =>{
    addElement('div','entry',e.srcElement);
    currentTodo = document.getElementsByClassName('task'+'').item(0).cloneNode(true);
};


let addEntry = () => {
    console.log('here');
    let list = document.querySelector('.list'+'');
    addElement('div','entry',list);
    list.appendChild(currentTodo);
};

window.saveText= saveText;

m();