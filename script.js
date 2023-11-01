//your JS code here. If required.
// script.js
window.onload = function () {
    let element = document.getElementById('level');
    let level = 1;
    while (element.parentElement) {
        level++;
        element = element.parentElement;
    }
    alert(`The level of the element is: ${level}`);
};
