export function createHtmlElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}
export function getDayName(dateData){
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateData);
    return week[date.getDay()]
}