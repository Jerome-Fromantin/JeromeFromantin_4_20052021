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

  /*
  Insérer éventuellement ici les 3 premières lignes
  de chaque "if" après le règlement du problème
  de répétition des différents messages d'erreurs.
  */

  let firstName = document.forms["reserve"]["first"]; // Variable du prénom.
  if (firstName.value == "") { // Si le prénom n'est pas rempli.
    let firstErrMess = document.createElement("p"); // On crée une variable qui contient un élément "p" créé.
    let firstErr = document.getElementById("first-err"); // On crée une variable qui récupère l'élément parent.
    firstErr.appendChild(firstErrMess); // On insère l'élément enfant dans l'élément parent.
    firstErrMess.textContent = "Veuillez ne pas oublier d'écrire votre prénom."
    first.style.border = "2px #e54858 solid";
    firstName.focus();
    return false;
  }
  /*
  else if (firstName.value.length >= 2 && firstName.value.length <= 20) { // Si le prénom est valide.
    let firstErrMess = document.createElement("p");
    let firstErr = document.getElementById("first-err");
    firstErr.appendChild(firstErrMess);
    firstErrMess.textContent = "Votre prénom est validé !"
    first.style.border = "2px #279e7a solid";
    lastName.focus();
    return false;
  }
  */
  // Si le prénom n'est pas vide mais qu'il a seulement 1 caractère ou plus de 20.
  else if (firstName.value.length < 2 || firstName.value.length > 20) {
    let firstErrMess = document.createElement("p");
    let firstErr = document.getElementById("first-err");
    firstErr.appendChild(firstErrMess);
    firstErrMess.textContent = "Veuillez écrire un prénom contenant entre 2 et 20 caractères inclus.";
    first.style.border = "2px #e54858 solid";
    firstName.focus();
    return false;
  }

  let lastName = document.forms["reserve"]["last"]; // Variable du nom.
  if (lastName.value == "") { // Si le nom n'est pas rempli.
    let lastErrMess = document.createElement("p");
    let lastErr = document.getElementById("last-err");
    lastErr.appendChild(lastErrMess);
    lastErrMess.textContent = "Veuillez ne pas oublier d'écrire votre nom.";
    last.style.border = "2px #e54858 solid";
    lastName.focus();
    return false;
  }
  // Si le nom n'est pas vide mais qu'il a seulement 1 caractère ou plus de 30.
  else if (lastName.value.length < 2 || lastName.value.length > 30) {
    let lastErrMess = document.createElement("p");
    let lastErr = document.getElementById("last-err");
    lastErr.appendChild(lastErrMess);
    lastErrMess.textContent = "Veuillez écrire un nom contenant entre 2 et 30 caractères inclus.";
    last.style.border = "2px #e54858 solid";
    lastName.focus();
    return false;
  }
  
  let email = document.forms["reserve"]["email"]; // Variable de l'e-mail.
  if (email.value == "") { // Si l'e-mail n'est pas rempli.
    let emailErrMess = document.createElement("p");
    let emailErr = document.getElementById("email-err");
    emailErr.appendChild(emailErrMess);
    emailErrMess.textContent = "Veuillez ne pas oublier d'écrire votre adresse e-mail.";
    email.style.border = "2px #e54858 solid";
    email.focus();
    return false;
  }
  // Si l'e-mail a cette valeur de test uniquement.
  else if (email.value == "test@mail.com") {
    let emailErrMess = document.createElement("p");
    let emailErr = document.getElementById("email-err");
    emailErr.appendChild(emailErrMess);
    emailErrMess.textContent = "Ceci est une valeur de test.";
    email.style.border = "2px #e54858 solid";
    email.focus();
    return false;
  }
  
  let birthdate = document.forms["reserve"]["birthdate"]; // Variable de la date de naissance.
  if (birthdate.value == "") { // Si la date de naissance n'est pas remplie.
    let birthdateErrMess = document.createElement("p");
    let birthdateErr = document.getElementById("birthdate-err");
    birthdateErr.appendChild(birthdateErrMess);
    birthdateErrMess.textContent = "Veuillez ne pas oublier d'indiquer votre date de naissance.";
    birthdate.style.border = "2px #e54858 solid";
    birthdate.focus();
    return false;
  }
  
  let sqCheckbox = document.forms["reserve"]["sq-checkbox1"]; // Variable de la case des conditions d'utilisation.
  if (sqCheckbox.checked == true) { /*(!sqCheckbox == false)*/
    alert('La case de "J\'ai lu et accepté..." doit rester cochée.');
    //return false;
  }
  else {
    //let sqCheckboxErrMess = document.createElement("p");
    //let sqCheckboxErr = document.getElementById("sqCheckbox-err");
    //sqCheckboxErr.appendChild(sqCheckboxErrMess);
    //sqCheckboxErrMess.textContent = "Cette case doit obligatoirement être cochée.";
    alert("Cette case n'est pas cochée.");
    //return false;
  }

  alert("Ce formulaire est validé !");
  return true;
}

// Fonction de fermeture du formulaire.
/*
function closeModal() {
let closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener('click', onClick() {
  closeBtn.innerHTML = "Coucou !";
})
modalbg.style.display = "none";
}
*/