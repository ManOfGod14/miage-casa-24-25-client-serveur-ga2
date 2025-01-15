// Déclaration d'un classe
class Personne {
  // ajout du contructeur : permettant d'initialiser un objet de la classe Personne
  constructor(n, a) {
    this.nom = n;
    this.age = a;
  }

  // ajout d'une méthode
  afficherDetails() {
    console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans`);
  }
}

// création d'un =e instnce de la classe Personne
const alice = new Personne("Alice", 30);
alice.afficherDetails();
