//Exercice 1 – Variables et portée
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

//Exercice 2 – Fonctions fléchées
console.log("\n=== Exercice 2 : Fonctions fléchées ===");

function sommeClassique(a, b) {
  return a + b;
}
console.log("Somme classique 3+4 =", sommeClassique(3,4));

// Réécriture en fonction fléchée
const sommeFlechee = (a, b) => a + b; // return implicite
console.log("Somme fléchée 3+4 =", sommeFlechee(3,4));

//Exercice 3 – Destructuring 
console.log("\n=== Exercice 3 : Destructuring ===");

const user = { name: "Noor", age: 10, city: "Tunis" };
const { name, age } = user;
console.log(`Nom : ${name}, Âge : ${age}`);

//  Exercice 4 – Spread Operator 
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

//  Partie 2 : Objets, Classes, Tableaux 
console.log("\n=== Partie 2 : Objets, Classes, Tableaux ===");

// Exercice 5 – Objet simple
const livre = {
  titre: "Le Petit Prince",
  auteur: "Antoine de Saint-Exupéry",
  annee: 1943,
  getInfo: function() {
    return `${this.titre} de ${this.auteur} (${this.annee})`;
  }
};
console.log("Exercice 5 :", livre.getInfo());

// Exercice 6 – Classe ES6
class Etudiant {
  constructor(nom, note) {
    this.nom = nom;
    this.note = note;
  }

  getMention() {
    if (this.note >= 16) return "Très bien";
    if (this.note >= 14) return "Bien";
    if (this.note >= 10) return "Passable";
    return "Échec";
  }
}

const etu1 = new Etudiant("Alice", 18);
const etu2 = new Etudiant("Bob", 13);
const etu3 = new Etudiant("Charlie", 9);

console.log("Exercice 6 :", etu1.nom, "->", etu1.getMention());
console.log("Exercice 6 :", etu2.nom, "->", etu2.getMention());
console.log("Exercice 6 :", etu3.nom, "->", etu3.getMention());

// Exercice 7 – Tableaux avancés
const notes = [12, 5, 17, 9, 20];

// 1. Moyenne
const moyenne = notes.reduce((acc, val) => acc + val, 0) / notes.length;
console.log("Exercice 7 - Moyenne :", moyenne);

// 2. Tri décroissant
const notesDecroissantes = [...notes].sort((a,b) => b-a);
console.log("Exercice 7 - Tri décroissant :", notesDecroissantes);

// 3. Filtrer notes >= 10
const notesSup10 = notes.filter(n => n >= 10);
console.log("Exercice 7 - Notes >= 10 :", notesSup10);

//Exercice 8 : Promesse simple 
const wait = ms => new Promise(res => setTimeout(res, ms));

async function simulateDownload() {
    const output = document.getElementById('exo8');
    output.textContent = "Début du téléchargement…";
    await wait(2000); // attendre 2 secondes
    output.textContent += "\nFin du téléchargement !";
}

simulateDownload();


// Exercice 9 : Fetch + async/await
async function loadPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        // On prend les 5 premiers titres
        const firstFive = data.slice(0, 5);
        const list = document.getElementById('postList');
        list.innerHTML = ""; 

        firstFive.forEach(post => {
            const li = document.createElement('li');
            li.textContent = post.title;
            list.appendChild(li);
        });

    } catch (error) {
        console.error("Erreur lors du fetch :", error);
    }
}

document.getElementById('loadPosts').addEventListener('click', loadPosts);