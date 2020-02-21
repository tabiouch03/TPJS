// Demander l'age utilisateur et l'afficher.
// Verifier l'age de l'utilisateur et le rédirigé selon son age. 
// Si il a 18ans ou plus le redirigé vers le site de google.
// Si il a moins de 18ans le redirigé vers le site de youtube.

function ageConfirmation() {

    if(age = prompt("Quel est votre age ?")) {
        alert("Vous avez " + age + " ans !");
        confirm("Etes vous sur d'avoir " + age + " ans ?");
    } 

    if(age > 18) {
        document.location.href="https://www.google.com";
    }

    else {
        alert("Vous n'etes pas autorisé a acceder au contenue.");
        document.location.href="https://www.youtube.com";
    }

}
