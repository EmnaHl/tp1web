
let chiffre;
let essais = 0 ;
let nombre = 0;

let difficulty = localStorage.getItem('difficulty');
console.log(difficulty);
if(difficulty === "easy"){
    essais = 10;
    chiffre = parseInt(Math.random() * 10);
    let span = document.querySelector("span");
    span.textContent = "Vous avez 10 essais pour trouver le nombre caché entre 0 et 10";

}else if(difficulty === "medium"){
    essais = 5;
    chiffre = parseInt(Math.random() * 50);
    let span = document.querySelector("span");
    span.textContent = "Vous avez 5 essais pour trouver le nombre caché entre 0 et 50";

}
else{
    essais = 3;
    chiffre =parseInt(Math.random() * 100);
    let span = document.querySelector("span");
    span.textContent = "Vous avez 3 essais pour trouver le nombre caché entre 0 et 100";
}
// if the submit button is clicked then takes the value of the input
// and compares it to the random number
let submit = document.querySelector(".btn");
submit.addEventListener("click", function(event) {
    // prevents the page from refreshing
    event.preventDefault();
    let input = document.querySelector("#inputBox");
    let value = +input.value;
    if (value < chiffre) {
        window.alert("C'est plus !");
        essais--;
        if( !window.confirm("Voulez-vous continuer ?") || essais === 0){
            let spanContent = "Le chiffre caché était " + chiffre + " !<br>" +
                "Vous avez perdu avec "+essais+" essais restants! 😢<br>" +
                "Rejouez pour essayer de gagner ! 🤞🏼";
            localStorage.setItem('spanContent', spanContent);
            /* takes user to the wrong guess page */
            window.location.href = "game over.html";
        }

    } else if (value > chiffre) {
        window.alert("C'est moins !");
        essais--;
        if( !window.confirm("Voulez-vous continuer ?") || essais === 0){
            //make the code below synchronous
            let spanContent = "Le chiffre caché était " + chiffre + " !<br>" +
                "Vous avez perdu ! 😢<br>" +
                "Rejouez pour essayer de gagner ! 🤞🏼";
            localStorage.setItem('spanContent', spanContent);
            /* takes user to the wrong guess page */
            window.location.href = "game over.html";
        }
    } else {
        window.alert("Bravo ! Vous avez trouvé en " + essais + " essais !");
        let paragContent = "le nombre caché était " + chiffre + " !<br>" +
            "vous avez gagné avec " +essais+ " essais restants ! 🥳<br>" +
            "Rejouez et essayez de deviner en moins d'essais ! 🤞🏼";
        localStorage.setItem('paragContent', paragContent);
        /* takes user to the right guess page */
        window.location.href = "right guess.html";


    }
});


