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

// Fonction d'apparition de la page modale : formulaire et fond bleuté.
function launchModal() {
  modalbg.style.display = "block";
}

// Fonction de validation des entrées du formulaire.
function validate() {

  // On crée la variable qui récupère l'input du prénom.
  let firstName = document.forms["reserve"]["first"];
  // On crée la variable "firstNameLength".
  // Cette variable est égale à la longueur du prénom entré auquel on a appliqué trim().
  // "trim()" est une fonction qui supprime les espaces en début et fin de chaîne.
  // Cela garantit qu'une chaîne contenant des espaces et 0 ou 1 lettre ne sera pas validée.
  let firstNameLength = ((firstName.value).trim()).length;
  // On crée la variable qui récupère l'élément qui servira de support aux messages d'erreur.
  let firstErr = document.getElementById("first-mess");
  // On crée la variable qui récupère le même élément support au message de validation.
  let firstVal = document.getElementById("first-mess");

  let lastName = document.forms["reserve"]["last"]; // Input du nom.
  let lastNameLength = ((lastName.value).trim()).length;
  let lastErr = document.getElementById("last-mess");
  let lastVal = document.getElementById("last-mess");

  let email = document.forms["reserve"]["email"]; // Input de l'e-mail.
  let emailLength = ((email.value).trim()).length;
  let emailErr = document.getElementById("email-mess");
  let emailVal = document.getElementById("email-mess");
  
  let birthdate = document.forms["reserve"]["birthdate"]; // Input de la date de naissance.
  let birthdateErr = document.getElementById("birthdate-mess");
  let birthdateVal = document.getElementById("birthdate-mess");
  
  let quantity = document.forms["reserve"]["quantity"]; // Input du nombre de tournois.
  let quantityErr = document.getElementById("quantity-mess");
  let quantityVal = document.getElementById("quantity-mess");
  
  let location1 = document.forms["reserve"]["location1"]; // Inputs des villes.
  let location2 = document.forms["reserve"]["location2"];
  let location3 = document.forms["reserve"]["location3"];
  let location4 = document.forms["reserve"]["location4"];
  let location5 = document.forms["reserve"]["location5"];
  let location6 = document.forms["reserve"]["location6"];
  let locationsErr = document.getElementById("locations-mess");
  let locationsVal = document.getElementById("locations-mess");
  
  // Input de la case des conditions d'utilisation.
  let sqCheckbox = document.forms["reserve"]["sq-checkbox1"];
  let sqCheckboxErr = document.getElementById("sq-checkbox-mess");
  let sqCheckboxVal = document.getElementById("sq-checkbox-mess");

  if (firstNameLength == 0) { // Si le prénom n'est pas rempli.
    // Le message s'écrit en rouge.
    firstErr.style.color = "#e54858";
    // On insère le message dans l'élément.
    firstErr.innerHTML = "<p>Veuillez écrire votre prénom.</p>"
    // On ajoute une bordure rouge au champ de saisie.
    first.style.border = "2px #e54858 solid";
    firstName.focus();
    return false;
  }
  // Si le prénom n'est pas vide mais qu'il a seulement 1 caractère ou plus de 20.
  else if (firstNameLength < 2 || firstNameLength > 20) {
    firstErr.style.color = "#e54858";
    firstErr.innerHTML = "<p>Veuillez écrire un prénom contenant entre 2 et 20 caractères inclus.</p>";
    first.style.border = "2px #e54858 solid";
    firstName.focus();
    return false;
  }
  else { // Si le prénom est valide.
    // Le message s'écrit en vert.
    firstVal.style.color = "#279e7a";
    firstVal.innerHTML = "<p>Votre prénom est validé !</p>";
    // On ajoute une bordure verte au champ de saisie.
    first.style.border = "2px #279e7a solid";
  }

  if (lastNameLength == "") { // Si le nom n'est pas rempli.
    lastErr.style.color = "#e54858";
    lastErr.innerHTML = "<p>Veuillez écrire votre nom.</p>";
    last.style.border = "2px #e54858 solid";
    lastName.focus();
    return false;
  }
  // Si le nom n'est pas vide mais qu'il a seulement 1 caractère ou plus de 30.
  else if (lastNameLength < 2 || lastNameLength > 30) {
    lastErr.style.color = "#e54858";
    lastErr.innerHTML = "<p>Veuillez écrire un nom contenant entre 2 et 30 caractères inclus.</p>";
    last.style.border = "2px #e54858 solid";
    lastName.focus();
    return false;
  }
  else { // Si le nom est valide.
    lastVal.style.color = "#279e7a";
    lastVal.innerHTML = "<p>Votre nom est validé !</p>";
    last.style.border = "2px #279e7a solid";
  }
  
  if (emailLength == "") { // Si l'e-mail n'est pas rempli.
    emailErr.style.color = "#e54858";
    emailErr.innerHTML = "<p>Veuillez écrire votre adresse e-mail.</p>";
    email.style.border = "2px #e54858 solid";
    email.focus();
    return false;
  }
  // Si l'e-mail n'est pas vide et qu'il est valide selon la regex.
  else if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
    if (email.value == "test@mail.com") { // Mais si l'e-mail a cette valeur de test uniquement.
      emailErr.style.color = "#e54858";
      emailErr.innerHTML = "<p>Ceci est une adresse de test.</p>";
      email.style.border = "2px #e54858 solid";
      email.focus();
      return false;
    }
  // Explication de la syntaxe de la regex :
  // /^ : Ouverture de la regex.
  // [] : Tous les caractères à l'intérieur des crochets sont acceptés.
  // a-zA-Z0-9.!#$%&’*+/=?^_`{|}~- : minuscules de a à z et/ou majuscules de A à Z et/ou chiffres de 0 à 9
  // et/ou tous les caractères spéciaux écrits.
  // +@ : Les caractères précédents doivent être suivis d'une arobase.
  // [a-zA-Z0-9-] : Suivi de minuscules de a à z et/ou majuscules de A à Z et/ou chiffres de 0 à 9.
  // +(? : Le point d'interrogation indique que la parenthèse ouvrante peut être présente 0 à 1 fois.
  // \. : L'antislash est le caractère d'échappement pour le point qui doit être compris comme
  // caractère unique de l'e-mail et non comme l'ensemble signifiant "tous les caractères".
  // [a-zA-Z0-9-] : Suivi de minuscules de a à z et/ou majuscules de A à Z et/ou chiffres de 0 à 9.
  // +)* : L'astérisque indique que la parenthèse fermante peut être présente 0 à plusieurs fois.
  // $/ : Fermeture de la regex.

  // .test(email.value) est la fonction vérifiant que la valeur du champ "email" respecte la regex précédente.
    else { // Sinon, si l'e-mail est vraiment valide.
      emailVal.style.color = "#279e7a";
      emailVal.innerHTML = "<p>Votre adresse e-mail est validée !</p>";
      email.style.border = "2px #279e7a solid";
    }
  }
  else { // Si l'e-mail n'est pas vide et qu'il est invalide.
    emailErr.style.color = "#e54858";
    emailErr.innerHTML = "<p>Veuillez écrire une adresse e-mail valide.</p>";
    email.style.border = "2px #e54858 solid";
    email.focus();
    return false;
  }
  
  if (birthdate.value == "") { // Si la date de naissance n'est pas remplie.
    birthdateErr.style.color = "#e54858";
    birthdateErr.innerHTML = "<p>Veuillez indiquer votre date de naissance.</p>";
    birthdate.style.border = "2px #e54858 solid";
    birthdate.focus();
    return false;
  }
  // Si la date de naissance n'est pas vide mais invalide (> à 100 ans ou < à 18 ans).
  else if (birthdate.value < "1921-01-01" || birthdate.value > "2003-12-31") {
    birthdateErr.style.color = "#e54858";
    birthdateErr.innerHTML = "<p>Veuillez indiquer une année postérieure à 1920 et antérieure à 2004.</p>";
    birthdate.style.border = "2px #e54858 solid";
    birthdate.focus();
    return false;
  }
  else { // Si la date de naissance est valide.
    birthdateVal.style.color = "#279e7a";
    birthdateVal.innerHTML = "<p>Votre date de naissance est validée !</p>";
    birthdate.style.border = "2px #279e7a solid";
  }
  
  if (quantity.value == "") { // Si le nombre de tournois n'est pas rempli.
    quantityErr.style.color = "#e54858";
    quantityErr.innerHTML = "<p>Veuillez indiquer le nombre de tournois auxquels vous avez participé.</p>";
    quantity.style.border = "2px #e54858 solid";
    quantity.focus();
    return false;
  }
  // Si le nombre de tournois n'est pas vide mais inférieur à 1 ou supérieur ou égal à 100.
  else if (quantity.value < 1 || quantity.value >= 100) {
    quantityErr.style.color = "#e54858";
    quantityErr.innerHTML = "<p>Veuillez indiquer un nombre entre 1 et 99 inclus.</p>";
    quantity.style.border = "2px #e54858 solid";
    quantity.focus();
    return false;
  }
  else { // Si le nombre de tournois est valide.
    quantityVal.style.color = "#279e7a";
    quantityVal.innerHTML = "<p>Ce nombre est validé !</p>";
    quantity.style.border = "2px #279e7a solid";
  }

  // Si aucune ville n'est cochée.
  if (location1.checked == false && location2.checked == false && location3.checked == false
  && location4.checked == false && location5.checked == false && location6.checked == false) {
    locationsErr.style.color = "#e54858";
    locationsErr.innerHTML = "<p>Vous devez cocher au moins l'une des villes.</p>";
    return false;
  }
  else {
    // Si une seule ville est cochée.
    if (location1.checked) {
      locationsVal.style.color = "#279e7a";
      locationsVal.innerHTML = "<p>Vous avez coché " + location1.value + ", votre choix est validé !</p>";
    }
    if (location2.checked) {
      locationsVal.style.color = "#279e7a";
      locationsVal.innerHTML = "<p>Vous avez coché " + location2.value + ", votre choix est validé !</p>";
    }
    if (location3.checked) {
      locationsVal.style.color = "#279e7a";
      locationsVal.innerHTML = "<p>Vous avez coché " + location3.value + ", votre choix est validé !</p>";
    }
    if (location4.checked) {
      locationsVal.style.color = "#279e7a";
      locationsVal.innerHTML = "<p>Vous avez coché " + location4.value + ", votre choix est validé !</p>";
    }
    if (location5.checked) {
      locationsVal.style.color = "#279e7a";
      locationsVal.innerHTML = "<p>Vous avez coché " + location5.value + ", votre choix est validé !</p>";
    }
    if (location6.checked) {
      locationsVal.style.color = "#279e7a";
      locationsVal.innerHTML = "<p>Vous avez coché " + location6.value + ", votre choix est validé !</p>";
    }
    // Si deux villes sont cochées.
    if (location1.checked && location2.checked || location1.checked && location3.checked
      || location1.checked && location4.checked || location1.checked && location5.checked
      || location1.checked && location6.checked || location2.checked && location3.checked
      || location2.checked && location4.checked || location2.checked && location5.checked
      || location2.checked && location6.checked || location3.checked && location4.checked
      || location3.checked && location5.checked || location3.checked && location6.checked
      || location4.checked && location5.checked || location4.checked && location6.checked
      || location5.checked && location6.checked) {
      locationsVal.style.color = "#279e7a";
      locationsVal.innerHTML = "<p>Vous avez coché deux villes, votre choix est validé !</p>";
    }
    // Si trois villes sont cochées.
    if (location1.checked && location2.checked && location3.checked
      || location1.checked && location2.checked && location4.checked
      || location1.checked && location2.checked && location5.checked
      || location1.checked && location2.checked && location6.checked
      || location1.checked && location3.checked && location4.checked
      || location1.checked && location3.checked && location5.checked
      || location1.checked && location3.checked && location6.checked
      || location1.checked && location4.checked && location5.checked
      || location1.checked && location4.checked && location6.checked
      || location1.checked && location5.checked && location6.checked
      || location2.checked && location3.checked && location4.checked
      || location2.checked && location3.checked && location5.checked
      || location2.checked && location3.checked && location6.checked
      || location2.checked && location4.checked && location5.checked
      || location2.checked && location4.checked && location6.checked
      || location2.checked && location5.checked && location6.checked
      || location3.checked && location4.checked && location5.checked
      || location3.checked && location4.checked && location6.checked
      || location3.checked && location5.checked && location6.checked
      || location4.checked && location5.checked && location6.checked) {
      locationsVal.style.color = "#279e7a";
      locationsVal.innerHTML = "<p>Vous avez coché trois villes, votre choix est validé !</p>";
    }
    // Si quatre villes sont cochées.
    if (location1.checked && location2.checked && location3.checked && location4.checked
      || location1.checked && location2.checked && location3.checked && location5.checked
      || location1.checked && location2.checked && location3.checked && location6.checked
      || location1.checked && location2.checked && location4.checked && location5.checked
      || location1.checked && location2.checked && location4.checked && location6.checked
      || location1.checked && location2.checked && location5.checked && location6.checked
      || location1.checked && location3.checked && location4.checked && location5.checked
      || location1.checked && location3.checked && location4.checked && location6.checked
      || location1.checked && location3.checked && location5.checked && location6.checked
      || location1.checked && location4.checked && location5.checked && location6.checked
      || location2.checked && location3.checked && location4.checked && location5.checked
      || location2.checked && location3.checked && location4.checked && location6.checked
      || location2.checked && location3.checked && location5.checked && location6.checked
      || location2.checked && location4.checked && location5.checked && location6.checked
      || location3.checked && location4.checked && location5.checked && location6.checked) {
      locationsVal.style.color = "#279e7a";
      locationsVal.innerHTML = "<p>Vous avez coché quatre villes, votre choix est validé !</p>";
    }
    // Si cinq villes sont cochées.
    if (location1.checked && location2.checked && location3.checked && location4.checked && location5.checked
      || location1.checked && location2.checked && location3.checked && location4.checked && location6.checked
      || location1.checked && location2.checked && location3.checked && location5.checked && location6.checked
      || location1.checked && location2.checked && location4.checked && location5.checked && location6.checked
      || location1.checked && location3.checked && location4.checked && location5.checked && location6.checked
      || location2.checked && location3.checked && location4.checked && location5.checked && location6.checked) {
      locationsVal.style.color = "#279e7a";
      locationsVal.innerHTML = "<p>Vous avez coché cinq villes, votre choix est validé !</p>";
    }
    // Si toutes les villes sont cochées.
    if (location1.checked && location2.checked && location3.checked
      && location4.checked && location5.checked && location6.checked) {
      locationsVal.style.color = "#279e7a";
      locationsVal.innerHTML = "<p>Vous avez coché toutes les villes, votre choix est validé !</p>";
    }
  }
  
  if (sqCheckbox.checked == false) { // Si la case des conditions est décochée.
    sqCheckboxErr.style.color = "#e54858";
    sqCheckboxErr.innerHTML = "<p>Vous devez avoir lu et accepté les conditions d'utilisation.</p>";
    return false;
  }
  else { // Si la case des conditions est cochée.
    sqCheckboxVal.style.color = "#279e7a";
    sqCheckboxVal.innerHTML = "<p>Merci d'avoir lu et accepté les conditions d'utilisation.</p>";
  }
  
  //alert("Ce formulaire est validé !");
  alert("Validation provisoire");
  return true;
  /*function openValid() { // Fonction d'ouverture de la validation.
    let validContent = document.querySelector(".valid-content");
    validContent.style.display = "block";
  }*/
}

// Fonction d'écoute du clic sur bouton de fermeture du formulaire pour la fonction suivante.
let closeBtn1 = document.getElementById("close-btn1");
closeBtn1.addEventListener('click', closeModal);

// Fonction de fermeture du formulaire.
function closeModal() {
  modalbg.style.display = "none";
}

// Fonction d'écoute du clic sur bouton de fermeture de la validation pour la fonction suivante.
let validContent = document.querySelector(".valid-content");
let closeBtn2 = document.getElementById("close-btn2");
closeBtn2.addEventListener('click', closeValid);

// Fonction de fermeture de la validation.
function closeValid(event) {
  event.stopPropagation();
  //let validation = document.getElementById("validation");
  //validation.style.color = "red";//"block";
  validContent.style.display = "none";
  alert("Ferme-toi !");
}