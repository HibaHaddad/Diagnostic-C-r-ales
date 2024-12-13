window.onload = function() {
  
  const selectedValue = localStorage.getItem("selectedOption");

  //pour afficher le résultat sélectionné
  if (selectedValue) {
      document.getElementById("result").innerText = "Vous avez sélectionné : " + selectedValue;
  } else {
      document.getElementById("result").innerText = "Aucune option n'a été sélectionnée.";
  }
}
//losqu'on on clique sur le boutton quit-btn on retourne à la page initiale
document.getElementById('quit-btn').addEventListener('click', function () {
  
  window.location.href = 'index.html'; 
});
document.getElementById('back-btn').addEventListener('click', function () {
  
  window.location.href = 'index.html'; 


});


function selectOrgan(organ) {
  // Stocker l'organe sélectionné dans localStorage
  localStorage.setItem("selectedOrgan", organ);

  // Rediriger vers la page etape3.html
  window.location.href = "etape3.html";
}




