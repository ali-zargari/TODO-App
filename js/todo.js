import {init, modifyContainer, addElement, generateGrid} from "./tools.js";

let current_text = '';
let size = 0;
let todo_list = [];
let priority = 1;
let due_date = '';

/**
 * TODOcard constructor
 *
 * @param ed due date of the card
 * @param td todo text
 * @constructor`
 */
let Todo = function Todo (ed, tdt, p, i){
    let todo_id = i;
    let end_date = ed;
    let todo_text = tdt;
    let done = false;
    let priority = p;
};

/**
 * due date setter method
 * @param e
 */
function setDate(e) {
    due_date = e.target.value;
    console.log(due_date);
}

/**
 * priority setter method
 * @param e
 */
function setPriority(e) {
    priority = e.target.value;
    e.srcElement.style.backgroundColor = 'orangered';
    console.log(priority);


}

/***
 *
 * Initializer method. Adds all listener methods.
 *
 *
 * */
function start(){
    //document.querySelector('.task'+'').addEventListener('')
    //document.querySelector('.input').appendChild(createTODO(true, '',' ', 1));

    document.querySelectorAll(`.todo`)[0].addEventListener('change', function (e){
        saveText(e);
    });

    document.querySelectorAll('.add')[0].addEventListener('click', function (e){
        addEntry(e);
    });

    document.querySelectorAll('.date')[0].addEventListener('input', function (e){
        setDate(e);
    });

    document.querySelectorAll('.p').forEach(button =>{
        button.addEventListener('click', function (e){
            setPriority(e);
        });
    });

};

/***
 *
 * Save the text inside the text box
 * */
let saveText = (e) =>{
    addElement('div','entry', e.srcElement);
    current_text = document.getElementsByClassName('text-box'+'').item(0).cloneNode(true);
};

/***
 * Add the TODO card to the list
 */
let addEntry = (e) => {
    //add entry element, then set it as the child of list, set id accordingly
    let list = document.querySelector('.list'+'');
    //let newEntry = addElement('div','todo',list);
    list.appendChild(createTODO(false, current_text.value,document.querySelector('.date'+'').value, 1));
    //let newEntry = createTODO();
    //newEntry.innerHTML = createTODO().innerHTML;
    //newEntry.id = size;
    //createTODO();
    //let date = document.querySelector('.date'+'').value;
    //let priority = document.querySelector('.a'+'').value;

    //set size variable and fill up array
    todo_list[size] = new Todo(document.querySelector('.date'+'').value, current_text.value, priority, size);
    console.log(todo_list[size]);
    size++;


};

/***
 * TODO: optimize
 *
 * creates a TODO card element
 */
let createTODO = (editable, text, date, p) => {
    let result = '';
    let doc ='';

    result +=
        "                <div class=\"todo\">\n" +
        "                    <div class=\"todo_text\">\n" +
        `                        <input class=\"text-box\" value=${text} readonly></input>\n` +
        "                    </div>\n" +
        "\n" +
        "                    <button class=\"add\">done.</button>\n" +
        "\n" +
        "                    <div class=\"deadline\">\n" +
        `                        <input class=\"date\" type=\"datetime-local\" name=\"myInput\" value=${date} readonly=\"readonly\">\n` +
        "                    </div>\n" +
        "                    <div class=\"priority\">\n" +
        "                        <button class=\"a\">1</button>\n" +
        "\n" +
        "                    </div>\n" +
        "                </div>";



    doc = new DOMParser().parseFromString(result, 'text/html');
    //console.log(doc.body.getElementsByClassName('a'));
    return doc.body.firstElementChild;
};

start();