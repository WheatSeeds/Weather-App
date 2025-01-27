export function createHtmlElement(tag, id, className) {
    const element = document.createElement(tag);
    element.className = className;
    element.id = id;
    return element;
}