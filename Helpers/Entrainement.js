class Cle {
  constructor(couleur) {
    console.log('création d une nouvelle clef');
    this.couleur = couleur;
  }

  repeindre(nouvelle_couleur) {
    console.log('Je repeint ma nouvelle clef en' + nouvelle_couleur);
    this.couleur = nouvelle_couleur;
  }

  description() {
    console.log('ma clef est de couleur' + this.couleur);
  }
}

var clef1 = new Cle('rouge');
var clef2 = new Cle('bleu');

clef1.description();
clef2.description();
