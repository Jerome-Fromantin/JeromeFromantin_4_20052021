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
  // Si le prénom est valide.
  else {
    let firstValMess = document.createElement("p");
    let firstVal = document.getElementById("first-val");
    firstVal.appendChild(firstValMess);
    firstValMess.textContent = "Votre prénom est validé !";
    first.style.border = "2px #279e7a solid";
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
  else { // Si le nom est valide.
    let lastValMess = document.createElement("p");
    let lastVal = document.getElementById("last-val");
    lastVal.appendChild(lastValMess);
    lastValMess.textContent = "Votre nom est validé !";
    last.style.border = "2px #279e7a solid";
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
  // Si l'e-mail n'est pas vide et qu'il est valide selon la regex.
  else if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
    if (email.value == "test@mail.com") { // Mais si l'e-mail a cette valeur de test uniquement.
      let emailErrMess = document.createElement("p");
      let emailErr = document.getElementById("email-err");
      emailErr.appendChild(emailErrMess);
      emailErrMess.textContent = "Ceci est une adresse de test.";
      email.style.border = "2px #e54858 solid";
      email.focus();
      return false;
    }
  // Explication de la syntaxe de la regex :
  // /^ : Ouverture de la regex.
  // [] : Tous les caractères à l'intérieur des crochets sont acceptés.
  // a-zA-Z0-9.!#$%&’*+/=?^_`{|}~ : minuscules de a à z et/ou majuscules de A à Z et/ou chiffres de 0 à 9
  // et/ou tous les caractères spéciaux écrits.

  // LE "-" AVANT LE CROCHET FERMANT A-T-IL UN SENS PARTICULIER ???

  // +@ : Les caractères précédents doivent être suivis d'une arobase.
  // [a-zA-Z0-9-] : Suivi de minuscules de a à z et/ou majuscules de A à Z et/ou chiffres de 0 à 9.

  // +(?: : SUIVI DE CES 3 CARACTERES ???

  // \. : L'antislash est le caractère d'échappement pour le point qui doit être compris comme
  // caractère unique de l'e-mail et non comme l'ensemble signifiant "tous les caractères".
  // [a-zA-Z0-9-] : Suivi de minuscules de a à z et/ou majuscules de A à Z et/ou chiffres de 0 à 9.

  // +)* : SUIVI DE CES 2 CARACTERES ???

  // $/ : Fermeture de la regex.

  // .test(email.value) est la fonction vérifiant que la valeur du champ "email" respecte la regex précédente.
    else { // Sinon, si l'e-mail est vraiment valide.
      let emailValMess = document.createElement("p");
      let emailVal = document.getElementById("email-val");
      emailVal.appendChild(emailValMess);
      emailValMess.textContent = "Votre adresse e-mail est validée !";
      email.style.border = "2px #279e7a solid";
    }
  }
  else { // Si l'e-mail n'est pas vide et qu'il est invalide.
    let emailErrMess = document.createElement("p");
    let emailErr = document.getElementById("email-err");
    emailErr.appendChild(emailErrMess);
    emailErrMess.textContent = "Veuillez écrire une adresse e-mail valide.";
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
  else { // Si la date de naissance est valide.
    let birthdateValMess = document.createElement("p");
    let birthdateVal = document.getElementById("birthdate-val");
    birthdateVal.appendChild(birthdateValMess);
    birthdateValMess.textContent = "Votre date de naissance est validée !";
    birthdate.style.border = "2px #279e7a solid";
  }
  
  let sqCheckbox = document.forms["reserve"]["sq-checkbox1"]; // Variable de la case des conditions d'utilisation.
  if (sqCheckbox.checked == true) { //(!sqCheckbox == false)
    alert('La case de "J\'ai lu et accepté..." doit rester cochée.');
    //return false;
  }
  else {
  //if (sqCheckbox.checked !== true) {
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

// Fonction d'écoute du clic sur bouton de fermeture pour la fonction suivante.
let closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener('click', closeModal);

// Fonction de fermeture du formulaire.
function closeModal() {
  modalbg.style.display = "none";
}