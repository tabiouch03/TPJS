function calculerIMC(poid,taille) {

    let tailleEnMetres = taille / 100;
    let tailleCalculee = tailleEnMetres * tailleEnMetres;
    let resultat =  poid / tailleCalculee;

    return resultat;
}

let poid = prompt("Quel est votre poid ? (en kg)");
let taille =  prompt("Quel est votre taille ? (en cm)");

alert(calculerIMC(poid,taille));