// ===== Exercice 1 – Variables et portée =====
console.log("=== Exercice 1 : Variables et portée ===");

var x = "var globale";
let y = "let globale";
const z = "const globale";

{
  var x = "var dans bloc";       // var reste visible à l'extérieur (function scope)
  let y = "let dans bloc";       // let est limité au bloc
  const z = "const dans bloc";   // const est limité au bloc
  console.log("Dans le bloc :", x, y, z);
}

console.log("En dehors du bloc :", x, y, z);

// Question piège : réaffecter une const
try {
  z = "nouvelle valeur"; 
} catch (e) {
  console.log("Réaffecter une const déclenche une erreur :", e.message);
}

// ===== Exercice 2 – Fonctions fléchées =====
console.log("\n=== Exercice 2 : Fonctions fléchées ===");

function sommeClassique(a, b) {
  return a + b;
}
console.log("Somme classique 3+4 =", sommeClassique(3,4));

// Réécriture en fonction fléchée
const sommeFlechee = (a, b) => a + b; // return implicite
console.log("Somme fléchée 3+4 =", sommeFlechee(3,4));

// ===== Exercice 3 – Destructuring =====
console.log("\n=== Exercice 3 : Destructuring ===");

const user = { name: "Noor", age: 10, city: "Tunis" };
const { name, age } = user;
console.log(`Nom : ${name}, Âge : ${age}`);

// ===== Exercice 4 – Spread Operator =====
console.log("\n=== Exercice 4 : Spread Operator ===");

const tab1 = [1,2,3];
const tab2 = [4,5,6];
const fusion = [...tab1, ...tab2];
console.log("Fusion tableaux :", fusion);

const obj1 = { a:1, b:2 };
const copie = { ...obj1 };
copie.b = 99; // modification d'une valeur
console.log("Objet original :", obj1);
console.log("Copie modifiée :", copie);
