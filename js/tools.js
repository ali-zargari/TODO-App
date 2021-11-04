/***
 *
 * A helper file to help with JS front end development.
 *
 *
 * @author Ali Zargari
 *
 */

/***
 * initialize html and body components.
 */
let init = () => {
    document.querySelectorAll('html, body'+'').forEach(node => {
    node.style.cssText =
            '    width: ' + 100 + '%;\n' +
            '    height: ' + 100 + '%;\n' +
            '    margin: 0px;\n' +
            '    padding: 0px;\n' +
            '    font-family: \'Zen Maru Gothic\', sans-serif;\n' +
            '    font-weight: 500;\n' +
            '    font-size: 20px' ;
    });
};

/***
 * Initialize any element that may be used as container, according to the parameters.
 *
 * @param container the container to be initialized
 * @param displayType set container display type to this parameter
 * @param width width of container
 * @param height height of container
 * @param margin margin of container
 * @param border border of container
 * @param padding padding of container
 */
let modifyContainer = (container, displayType, width, height, margin, border, padding) => {

    container.style.display = displayType;
    container.style.width = width;
    container.style.height = height;
    container.style.margin = margin;
    container.style.border = border;
    container.style.padding = padding;

};



/***
 * create element of type 'type', and append it as the child of 'parent'
 *
 * @param type type of element to be created.
 * @param parent select the parent-element.
 */
let addElement = (type, class_name, parent) => {
    let element = document.createElement(type)
    if(class_name.length > 0) element.className = class_name;
    parent.appendChild(element);
    return element;
};


/***
 *
 * Returns the CSS text for a grid layout using the parameters.
 *
 * @param rows an array representing the rows
 * @param cols an array representing the columns
 * @param gap an array containing V and H gap.
 * @returns {string} returns the CSS code for a grid using the given settings.
 */
let generateGrid = (rows, cols, gap) => {


    let result = 'display: grid;\n';
    result += 'grid-template-rows:  repeat('+rows+', 1fr);\n';
    result += 'grid-template-columns:  repeat('+cols+', 1fr);\n';
    result += 'gap: ' + gap[0] + ' ' + gap[1] + ';\n';

    console.log(result);
    return result;
};


export {init, modifyContainer, addElement, generateGrid};

