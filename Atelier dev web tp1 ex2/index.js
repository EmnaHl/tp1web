let select = document.querySelector('select');
let size = document.querySelector('#size');
let color = document.querySelector('#color');
let textArea = document.querySelector('textarea');
let input = document.querySelector('input');
let p = document.querySelector('p');


select.addEventListener('change', function() {
    let selectedOption = select.options[select.selectedIndex];
    textArea.style.fontFamily = selectedOption.value;
});

size.addEventListener('change', function() {
    textArea.style.fontSize = size.value + 'px';
});

color.addEventListener('change', function() {
    textArea.style.color = color.value;
    input.style.borderColor = color.value;
    select.style.borderColor = color.value;
    textArea.style.borderColor = color.value;
    size.style.borderColor = color.value;
    p.style.color = color.value;
});
