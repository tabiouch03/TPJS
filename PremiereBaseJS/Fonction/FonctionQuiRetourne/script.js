// variables globales
let nombreUn = 88, nombreDeux = 7;

function addition(nombreA, nombreB) {

    let result = nombreA + nombreB;
    // console.log(result);
    return result; // 11
    // Tout ce qui est ecrit sous un return n'est pas executé  
    
}

function division(nombreA, nombreB) {

    let result = nombreA / nombreB;

    return result;
}

// Ici on remplace le nom des variables locale passé en parametre
// pour utiliser les variables globale et ainsi utilisé leur valeur.
console.log(addition(nombreUn,nombreDeux));
console.log(division(nombreUn,nombreDeux));

let resultatAddition = addition(nombreUn, nombreDeux);
let resulatDivision = division(nombreUn, nombreDeux);


console.log(resultatAddition + resulatDivision);




