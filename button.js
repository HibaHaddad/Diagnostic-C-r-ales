//losqu'on clique sur ce bouton on passe à la page de diagnostic
document.getElementById('diagnostic-btn').addEventListener('click', function () {
  
  window.location.href = 'diagnostic.html'; 
});
//cette fonction est pour storer la valeu sélectionner
function saveSelection() {
  const select = document.getElementById("plantes");
  const selectedValue = select.value;


  localStorage.setItem("selectedOption", selectedValue);
}
