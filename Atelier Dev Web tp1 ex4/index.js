function generateColor(){
    const rgbRed = Math.floor(Math.random() * 256);
    const rgbGreen = Math.floor(Math.random() * 256);
    const rgbBlue = Math.floor(Math.random() * 256);
    return `rgb(${rgbRed} , ${rgbGreen} , ${rgbBlue})`;
}

function generateFont(){
    const fonts = ['Arial','Helvetica','Times New Roman','Courier New','Georgia'];
    const randomIndex = Math.floor(Math.random() * fonts.length);
    return fonts[randomIndex];
}

document.addEventListener('click',function(e){
    if (e.target.tagName === 'LI'){
        let color = generateColor()
        e.target.style.color = color;
        e.target.style.borderColor = color;
        e.target.style.fontFamily = generateFont();
    }
})