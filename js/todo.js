/**
 * The most basic version of a goal-setting TODO app.
 *
 * @author Ali Zargari
 */

import {init, modifyContainer, addElement, generateGrid} from "./tools.js";
let temp_p = 1;
let temp_pe = document.createElement('div');
let size = 0;
let todo_list = [];

/**
 * TODOcard constructor
 *
 * @param ed due date of the card
 * @param td todo text
 * @constructor`
 */
function Todo (e_date, todo_t, status, p, id){
    this.end_date = e_date;
    this.todo_text = todo_t;
    this.done = status;
    this.priority = p;
    this.todo_id = id;
};

Todo.prototype.getDeadLine = function () {
    return this.end_date;
};
Todo.prototype.getText = function () {
    return this.todo_text;
};
Todo.prototype.getStatus = function () {
    return this.done;
};
Todo.prototype.getTodoId = function () {
    return this.todo_id;
};
Todo.prototype.getDeadLine = function () {
    return this.end_date;
};
Todo.prototype.getPriority = function () {
    return this.priority;
};



/**
 * priority setter method
 * @param e
 */
function setPriority(e) {
    temp_p = e.srcElement.innerHTML;

    //temp_pe.style.backgroundColor = 'rgb(255 102 0)';
    e.srcElement.style.backgroundColor = 'orangered';
    temp_pe.style.backgroundColor = 'rgb(255,102,0)';
    temp_pe = e.srcElement;

}

function remove(e) {
    //e.srcElement.remove();
    e.srcElement.parentElement.remove();
    console.log(e.path[1].attributes.id);
    //todo_list = todo_list[0, e.path[1].attributes.id] + todo_list[e.path[1].attributes.id+1, size];
    size--;
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

    document.querySelectorAll('.add')[0].addEventListener('click', function (){
        addEntry();
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
let saveText = () =>{
    //addElement('div','entry', e.srcElement);
    return document.getElementsByClassName('text-box'+'').item(0).cloneNode(true);
};

/***
 * Add the TODO card to the list
 */
let addEntry = () => {
    //add entry element, then set it as the child of list, set id accordingly
    let current_text = saveText()
    let temp_todo = createTODO(
        current_text,
        document.querySelector('.input .date'+'').value,
        document.querySelector('.input .priority'+'').value,
        false,
        size
    );
    let list = document.querySelector('.list'+'');
    let todo_element = createTODO_Element(temp_todo);
    list.appendChild(todo_element);

    console.log(todo_element.children[2]);
    todo_element.children[2].addEventListener('click', function (e){
            remove(e);
    });

    //set size variable and fill up array
    todo_list[size] = temp_todo;
    console.log(todo_list);
    size++;


};

let createTODO_Element = (todo) =>{

    console.log(todo.getDeadLine());

    let result = '';
    let doc ='';

    result +=
        `                <div class=\"card\" id=${todo.getTodoId()}>\n` +
        "                    <div class=\"todo_text\">\n" +
        `                        <input class=\"text-box\" value=\"${todo.getText().value}\" readonly></input>\n` +
        "                    </div>\n" +
        "\n" +
        "                    <button class=\"done\">done.</button>\n" +
        "                    <button class=\"remove\">remove.</button>\n" +
        "\n" +
        "                    <div class=\"deadline final_deadline\">\n" +
        `                        <input class=\"date final_date\" type=\"datetime-local\" name=\"myInput\" value=\"${todo.getDeadLine()}\" readonly=\'readonly\'>\n` +
        "                    </div>\n" +
        "                    <div class=\"priority\">\n" +
        `                        <button class=\"a\">${temp_p}</button>\n` +
        "\n" +
        "                    </div>\n" +
        "                </div>";



    doc = new DOMParser().parseFromString(result, 'text/html');
    //console.log(doc.body.getElementsByClassName('a'));
    console.log(doc.body.firstElementChild.getElementsByClassName('priority')[0].style.cssText +=
        "    grid-template-areas:\n" +
        "    \"a a\"\n" +
        "    \"a a\"");
    console.log(doc.body.getElementsByClassName('card')[0].style.cssText +=
        "grid-template-areas:\n"+
        "\"todo_text todo_text todo_text\"\n"+
        "\"deadline priority done\"\n"+
        "\"deadline priority remove\")\n");
    return doc.body.firstElementChild;
};

/***
 * TODO: optimize
 *
 * creates a TODO card element
 */
let createTODO = (text, date, p, isdone, id) => {

    let temp = new Todo(date, text, isdone, p, id);
    return temp;

};

start();