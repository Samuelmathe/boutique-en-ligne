const produits = [
  { nom: 'T-shirt', categorie: 'Vêtements', sousCategorie: 'T-shirts', prix: 20, url_image: "https://th.bing.com/th/id/R.81056222234d24e5436cfeac5463060b?rik=2MbhMqo5lDVlHA&pid=ImgRaw&r=0" },
  { nom: 'Jeans', categorie: 'Vêtements', sousCategorie: 'Jeans', prix: 45, url_image: "https://th.bing.com/th/id/OIP.GvX3lSqd21g0Zq1axjWjVwHaMJ?rs=1&pid=ImgDetMain" },
  { nom: 'Robe', categorie: 'Vêtements', sousCategorie: 'Robes', prix: 60, url_image: "https://th.bing.com/th/id/R.411aa7b6ac5050ccc30a226f49dbacbb?rik=TBfyfNnjUG3SYA&riu=http%3a%2f%2fwww.snut.fr%2fwp-content%2fuploads%2f2015%2f10%2fimage-de-robe-6.jpg&ehk=cD1tn0M1%2b%2fMOwqZNUh%2fIiP6bB9hzEIbFKaL5oiCSg8o%3d&risl=&pid=ImgRaw&r=0" },
  { nom: 'Talons hauts', categorie: 'Chaussures', sousCategorie: 'Talons hauts', prix: 80, url_image: "https://th.bing.com/th/id/OIP.iQJaAY0mToGR7Ld9l5IGXAHaGx?rs=1&pid=ImgDetMain" },
  { nom: 'Baskets', categorie: 'Chaussures', sousCategorie: 'Baskets', prix: 70, url_image: "https://contents.mediadecathlon.com/p1731519/k$c6404d5ac9dfe1afc0c583d9864d295e/sq/CHAUSSURE+DE+BASKETBALL+HOMME+ELEVATE+900+TIGE+MID+BLANCHE.jpg" },
  { nom: 'rolex', categorie: 'Accessoires de mode', sousCategorie: 'montre', prix: 30, url_image: "https://th.bing.com/th/id/OIP.A4W4XzexHDPrrHxsUdxUbgHaHa?rs=1&pid=ImgDetMain" },
  { nom: 'Gshock', categorie: 'Accessoires de mode', sousCategorie: 'montre', prix: 20, url_image: "https://th.bing.com/th/id/OIP.QCPYtw-LlJgwrM7cqF_DBwHaJ3?rs=1&pid=ImgDetMain" },
  { nom: 'perle', categorie: 'Accessoires de mode', sousCategorie: 'collier', prix: 20, url_image: "https://th.bing.com/th/id/OIP.jMKOF4IWzNax1J7L_JqaVAHaFi?rs=1&pid=ImgDetMain" },
  { nom: 'Samsung S10', categorie: 'Produits électroniques', sousCategorie: 'telephone', prix: 120, url_image: "https://th.bing.com/th/id/OIP.cWrf-bEqiJEmSNdg-EO5WgHaGM?rs=1&pid=ImgDetMain" },
  { nom: 'iphone 12', categorie: 'Produits électroniques', sousCategorie: 'telephone', prix: 200, url_image: "https://th.bing.com/th/id/OIP.ne4luWiFcG49jRLANSs0GAHaIw?rs=1&pid=ImgDetMain" },
  { nom: 'Ipad', categorie: 'Produits électroniques', sousCategorie: 'tablette', prix: 230, url_image: "https://th.bing.com/th/id/OIP.eHVDGyw5nfsvIDNi-2PmtwHaHa?rs=1&pid=ImgDetMain" },
  { nom: 'Dell 14" E6430 Laptop', categorie: 'Produits électroniques', sousCategorie: 'ordinateur', prix: 320, url_image: "https://th.bing.com/th/id/OIP.8BGowKEmswAiORMkfEiSIQHaHa?rs=1&pid=ImgDetMain" },
  { nom: 'lenovo notebook', categorie: 'Produits électroniques', sousCategorie: 'ordinateur', prix: 340, url_image: "https://a-static.mlcdn.com.br/1500x1500/notebook-lenovo-ideapad-s145-intel-core-i7-8gb-1tb-156-full-hd-placa-de-video-2gb/magazineluiza/224068400/706b9022656672f8303abc28955f838a.jpg" },
  { nom: 'hp elitebook 840 g3', categorie: 'Produits électroniques', sousCategorie: 'ordinateur', prix: 20, url_image: "https://th.bing.com/th/id/R.5988a0346ffe7f296f8f20a37ba97fb0?rik=OjWFcp%2fxwD8s%2bg&pid=ImgRaw&r=0" },
  // ... Vous pouvez ajouter d'autres produits ici
];

let panier = {};
let prixTotal = 0;

function afficherProduits(produitsAffiches) {
  const listeProduits = document.getElementById('listeProduits');
  listeProduits.innerHTML = '';

  produitsAffiches.forEach((produit, index) => {
    const produitDiv = document.createElement('div');
    produitDiv.classList.add('produit');
    
    produitDiv.innerHTML = `
      <h2>${produit.nom}</h2>
      <img src="${produit.url_image}" alt="${produit.nom}">
      <p>Prix: $${produit.prix}</p>
      <button onclick="ajouterAuPanier('${produit.nom}', ${produit.prix}, event)">Ajouter au Panier</button>
    `;

    listeProduits.appendChild(produitDiv);
    
    // Animation d'affichage
    setTimeout(() => produitDiv.classList.add('visible'), 100 * index);
  });
}

function afficherSousCategories(categorie) {
  const sousCategories = new Set();
  produits.forEach(produit => {
    if (produit.categorie === categorie) {
      sousCategories.add(produit.sousCategorie);
    }
  });

  const sousCategoriesDiv = document.getElementById('sousCategories');
  sousCategoriesDiv.innerHTML = '';
  [...sousCategories].forEach(sousCategorie => {
    const sousCategorieBtn = document.createElement('button');
    sousCategorieBtn.textContent = sousCategorie;
    sousCategorieBtn.onclick = () => filtrerParSousCategorie(categorie, sousCategorie);
    sousCategoriesDiv.appendChild(sousCategorieBtn);
  });
}

function filtrerParCategorie(categorie) {
  afficherSousCategories(categorie);
  
  const produitsAffiches = categorie === 'Tous' ? produits : produits.filter(produit => produit.categorie === categorie);
  afficherProduits(produitsAffiches);
}

function filtrerParSousCategorie(categorie, sousCategorie) {
  const produitsAffiches = produits.filter(produit => 
    (categorie === 'Tous' || produit.categorie === categorie) && produit.sousCategorie === sousCategorie
  );
  afficherProduits(produitsAffiches);
}

function ajouterAuPanier(nom, prix, event) {
  panier[nom] = panier[nom] || { prix: prix, quantite: 0 };
  panier[nom].quantite++;
  prixTotal += prix;
  
  // Animation du bouton Ajouter au panier
  const bouton = event.target;
  bouton.classList.add('added');
  setTimeout(() => bouton.classList.remove('added'), 500);
  
  afficherPanier();
}

function retirerDuPanier(nom, prix) {
  if (panier[nom]) {
    panier[nom].quantite--;
    prixTotal -= prix;
    if (panier[nom].quantite === 0) {
      delete panier[nom];
    }
    afficherPanier();
  }
}

function afficherPanier() {
  const listePanier = document.getElementById('listePanier');
  listePanier.innerHTML = '';

  Object.entries(panier).forEach(([nom, { prix, quantite }]) => {
    const sousTotal = prix * quantite;
    const elementPanier = document.createElement('li');
    elementPanier.textContent = `${nom} - Quantité: ${quantite} - Prix total: $${sousTotal}`;

    const retirerBtn = document.createElement('button');
    retirerBtn.textContent = 'Retirer';
    retirerBtn.onclick = () => retirerDuPanier(nom, prix);

    elementPanier.appendChild(retirerBtn);
    listePanier.appendChild(elementPanier);
  });

  const totalElement = document.getElementById('total');
  totalElement.textContent = `Total: $${prixTotal}`;
}

// Affichage par défaut des produits
filtrerParCategorie('Tous');
