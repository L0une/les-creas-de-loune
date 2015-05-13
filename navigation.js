if (!window.location.href.match("#")) {
  window.location.href = '#accueil';
}



/*Fonction pour la classe "active" aux boutons.*/
/*La classe se met au clique et au load de la page.*/
function pageActive() {
  window.setTimeout(function() {
    var liensAActiver = document.querySelectorAll('a.active');
    for (var key = 0; key < liensAActiver.length; key++) {
      var elem = liensAActiver[key];
      elem.classList.remove('active');
    }
    liensAActiver = document.querySelectorAll('a[href$="' + window.location.hash + '"]');
    for (key = 0; key < liensAActiver.length; key++) {
      elem = liensAActiver[key];
      elem.classList.add('active');
    }
  }, 0);
}

/*Fonction qui permet d'afficher une div en-dessous de la div principale.
* En gros, elle permet aux kits de s'afficher une fois que l'on clique sur le bouton correspndant, sans ouvrir
* dans une nouvelle page mais en s'affihant sur la même, en-dessous de la div principale.
* Pour utiliser cette fonction > mettre "return afficherDiv()" sur un "onclick" d'un bouton.*/
function afficherDiv(cible){

  var liensAActiver = document.querySelectorAll('div.img');
  for (var key = 0; key < liensAActiver.length; key++) {
    var elem = liensAActiver[key];
    elem.style.display = "none";
  }
  var div = document.getElementById(cible);

  div.style.display = "block";
  return false;
}

/*CHANGEMENT TITRE*/
window.addEventListener("hashchange", changeTitre, false);
function changeTitre() {
    document.title = document.querySelector('nav a.bouton[href="'+window.location.hash+'"]').innerText + " | Les créas de Loune";
    pageActive();
}
changeTitre();