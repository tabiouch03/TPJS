// Variable Global

let crie; // Ici nous avons crée une variable global sans valeur.



function crieDeGuerre() {
        // Cette variable n'est accessible que dans la fonction CrieDeGuerre()
        let crie = "Toujours plus fort !"; // Locale 
        // cri = "Toujours plus fort !"; // On defini la valeur de la variable Crie
        console.log(crie);

}

crieDeGuerre();
// Nous ne pouvons pas faire un console.log d'une variable qui se trouve
// Dans une fonction a l'exterieur de celle ci. 