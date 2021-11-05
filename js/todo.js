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
let Todo = function Todo (ed, tdt, p){
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
    document.querySelector('.input').appendChild(createTODO(false, 'hahaha',' ', 1));

    document.getElementsByClassName('todo')[0].addEventListener('change', function (e){
        saveText(e);
    });

    document.getElementsByClassName('add')[0].addEventListener('click', function (e){
        addEntry(e);
    });

    document.getElementsByClassName('date')[0].addEventListener('input', function (e){
        setDate(e);
    });

    document.getElementsByClassName('a')[0].addEventListener('click', function (e){
        setPriority(e);
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
    list.appendChild(createTODO(false, 'hahaha',document.querySelector('.date'+'').value, 1));
    //let newEntry = createTODO();
    //newEntry.innerHTML = createTODO().innerHTML;
    //newEntry.id = size;
    //createTODO();
    //let date = document.querySelector('.date'+'').value;
    //let priority = document.querySelector('.a'+'').value;

    //set size variable and fill up array
    //todo_list[size] = new Todo(date, newEntry.innerHTML, priority);
    console.log(todo_list[size-1]);
    size++;


};

/***
 * TODO: optimize
 *
 * creates a TODO card element
 */
let createTODO = (editable, text, date, p) => {
    let result = '';
    if(!editable){
        result +=
            "                <div class=\"todo\">\n" +
            "                    <div class=\"todo_text\">\n" +
            "                        <p class=\"text-box\">${text}</p>\n" +
            "                    </div>\n" +
            "\n" +
            "                    <button class=\"add\">add</button>\n" +
            "\n" +
            "                    <div class=\"deadline\">\n" +
            "                        <input class=\"date\" type=\"datetime-local\" name=\"myInput\" value=${date}>\n" +
            "                    </div>\n" +
            "                    <div class=\"priority\">\n" +
            "                        <button class=\"a\">1</button>\n" +
            "                        <button class=\"a\">2</button>\n" +
            "                        <button class=\"a\">3</button>\n" +
            "                        <button class=\"a\">4</button>" +
            "\n" +
            "                    </div>\n" +
            "                </div>";
    } else {
        result +=
            "                <div class=\"todo\">\n" +
            "                    <div class=\"todo_text\">\n" +
            "                        <input class=\"text-box\">${text}</input>\n" +
            "                    </div>\n" +
            "\n" +
            "                    <button class=\"add\">add</button>\n" +
            "\n" +
            "                    <div class=\"deadline\">\n" +
            "                        <input class=\"date\" type=\"datetime-local\" name=\"myInput\" value=${date}>\n" +
            "                    </div>\n" +
            "                    <div class=\"priority\">\n" +
            "                        <button class=\"a\">1</button>\n" +
            "                        <button class=\"a\">2</button>\n" +
            "                        <button class=\"a\">3</button>\n" +
            "                        <button class=\"a\">4</button>" +
            "\n" +
            "                    </div>\n" +
            "                </div>";
    }

    let doc = new DOMParser().parseFromString(result, 'text/html');
    console.log(doc.body.firstElementChild);
    return doc.body.firstElementChild;
};

start();