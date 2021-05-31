function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
  
// Eléments DOM.
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// Fonction d'écoute des clics sur boutons pour la fonction suivante.
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Fonction d'apparition du formulaire.
function launchModal() {
  modalbg.style.display = "block";
}

// Fonction de validation des entrées du formulaire.
function validate() {
  var firstName = document.forms["reserve"]["first"]; // Variable du prénom.
  var lastName = document.forms["reserve"]["last"]; // Variable du nom.
  if (firstName.value == "") { // Si le prénom n'est pas rempli.
    if (lastName.value == "") { // Si le nom n'est pas rempli non plus.
      alert("Veuillez ne pas oublier d'écrire votre prénom et votre nom.");
      firstName.focus();
      return false;
    }
    // Si le nom n'est pas vide mais qu'il a seulement 1 caractère ou plus de 30.
    else if (lastName.value.length < 2 || lastName.value.length > 30) {
      alert("Veuillez écrire un nom contenant entre 2 et 30 caractères inclus.");
      lastName.focus();
      return false;
    }
    // Si le prénom n'est pas rempli mais que le nom est valide.
    alert("Veuillez ne pas oublier d'écrire votre prénom.");
    firstName.focus();
    return false;
  }
  // Si le prénom n'est pas vide mais qu'il a seulement 1 caractère ou plus de 20.
  else if (firstName.value.length < 2 || firstName.value.length > 20) {
    alert("Veuillez écrire un prénom contenant entre 2 et 20 caractères inclus.");
    firstName.focus();
    return false;
  }

  // Si le prénom est valide mais que le nom n'est pas rempli.
  if (lastName.value == "") {
    alert("Veuillez ne pas oublier d'écrire votre nom.");
    lastName.focus();
    return false;
  }
  // Si le nom n'est pas vide mais qu'il a seulement 1 caractère ou plus de 30.
  else if (lastName.value.length < 2 || lastName.value.length > 30) {
    alert("Veuillez écrire un nom contenant entre 2 et 30 caractères inclus.");
    lastName.focus();
    return false;
  }
  
  var email = document.forms["reserve"]["email"]; // Variable de l'e-mail.
  if (email.value == "") {
    alert("Veuillez ne pas oublier d'écrire votre adresse e-mail.");
    email.focus();
    return false;
  }
  
  var birthdate = document.forms["reserve"]["birthdate"]; // Variable de la date de naissance.
  if (birthdate.value == "") {
    alert("Veuillez ne pas oublier d'indiquer votre date de naissance.");
    birthdate.focus();
    return false;
  }
  
  /*
  var sqCheckbox = document.forms["reserve"]["sq-checkbox1"]; // Variable de la case des conditions d'utilisation.
  if (sqCheckbox.unchecked) {
    alert("Cette case doit obligatoirement être cochée.");
    sqCheckbox.focus();
    return false;
  }
  */

  alert("Ce formulaire est validé !");
  return true;
}

// Fermer le formulaire
/* function closeModal() {
  modalbg.style.display = "none";
}
Avec le clic sur span class="close".
*/