 // Récupérer l'organe sélectionné depuis localStorage
 const selectedOrgan = localStorage.getItem("selectedOrgan");

 // Associer les organes à des maladies
 const maladies = {
   grain: "Maladie charbonneuse",
   epi: "Charbon du blé",
   panicule: "Charbon nu de l'avoine",
   tige: "Pied et tiges malades",
   racine: "Pied malade",
   feuille: "Maladies foliaires",
   plantules: "Plantules affectées",
   glumes: "Glumes infectées",
   basedetige: "Base de la tige touchée"
 };

 // Récupérer l'élément pour afficher le résultat
 const resultDiv = document.getElementById("result");

 // Afficher le résultat ou un message si aucun résultat n'est trouvé
 if (selectedOrgan && maladies[selectedOrgan]) {
   resultDiv.textContent = `Organe sélectionné : ${selectedOrgan}  
    => maladie: ${maladies[selectedOrgan]}`;
 } else {
   resultDiv.textContent = "Aucun résultat disponible. Retournez à la sélection.";
 }

 document.getElementById('back-btn').addEventListener('click', function () {
  
  window.location.href = 'diagnostic.html'; 


});
const moyens = {
  grain: " rotation des cultures et traitement des semences",
   epi: " désinfection des semences avec fongicide systémique",
   panicule: "rotation des cultures et traitements des semences",
   tige: " rotation des cultures et traitements des semences",
   racine: " rotation des cultures et la désinfection des semences et pas de traitements en végétation  "
}
// Récupérer l'élément pour afficher le résultat
const Div = document.getElementById("lutte");

// Afficher le résultat ou un message si aucun résultat n'est trouvé
if (selectedOrgan && moyens[selectedOrgan]) {
  Div.textContent = `Moyens de luttes : ${moyens[selectedOrgan]}`;
} else {
  Div.textContent = "Aucun moyen de lutte disponible. Retournez à la sélection.";
}

