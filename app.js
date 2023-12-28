const produits = [
    { nom: 'T-shirt', categorie: 'Vêtements', sousCategorie: 'T-shirts', prix: 20,url_image:"https://th.bing.com/th/id/R.81056222234d24e5436cfeac5463060b?rik=2MbhMqo5lDVlHA&pid=ImgRaw&r=0 "},
    { nom: 'Jeans', categorie: 'Vêtements', sousCategorie: 'Jeans', prix: 45,url_image:"https://th.bing.com/th/id/OIP.GvX3lSqd21g0Zq1axjWjVwHaMJ?rs=1&pid=ImgDetMain" },
    { nom: 'Robe', categorie: 'Vêtements', sousCategorie: 'Robes', prix: 60,url_image: "https://th.bing.com/th/id/R.411aa7b6ac5050ccc30a226f49dbacbb?rik=TBfyfNnjUG3SYA&riu=http%3a%2f%2fwww.snut.fr%2fwp-content%2fuploads%2f2015%2f10%2fimage-de-robe-6.jpg&ehk=cD1tn0M1%2b%2fMOwqZNUh%2fIiP6bB9hzEIbFKaL5oiCSg8o%3d&risl=&pid=ImgRaw&r=0"},
    { nom: 'Talons hauts', categorie: 'Chaussures', sousCategorie: 'Talons hauts', prix: 80 ,url_image:"https://th.bing.com/th/id/OIP.iQJaAY0mToGR7Ld9l5IGXAHaGx?rs=1&pid=ImgDetMain"},
    { nom: 'Baskets', categorie: 'Chaussures', sousCategorie: 'Baskets', prix: 70 ,url_image:"https://contents.mediadecathlon.com/p1731519/k$c6404d5ac9dfe1afc0c583d9864d295e/sq/CHAUSSURE+DE+BASKETBALL+HOMME+ELEVATE+900+TIGE+MID+BLANCHE.jpg"},
    {nom:'rolex',categorie:'Accessoires de mode',sousCategorie: 'montre', prix: 30 ,url_image:"https://th.bing.com/th/id/OIP.A4W4XzexHDPrrHxsUdxUbgHaHa?rs=1&pid=ImgDetMain"},
    {nom:'Gshock',categorie:'Accessoires de mode',sousCategorie: 'montre', prix: 20 ,url_image:"https://th.bing.com/th/id/OIP.QCPYtw-LlJgwrM7cqF_DBwHaJ3?rs=1&pid=ImgDetMain"},
    {nom:'perle',categorie:'Accessoires de mode',sousCategorie: 'collier', prix: 20 ,url_image:"https://th.bing.com/th/id/OIP.jMKOF4IWzNax1J7L_JqaVAHaFi?rs=1&pid=ImgDetMain"},
    {nom:'Samsung S10',categorie:'Produits électroniques',sousCategorie: 'telephone', prix: 120 ,url_image:"https://th.bing.com/th/id/OIP.cWrf-bEqiJEmSNdg-EO5WgHaGM?rs=1&pid=ImgDetMain"},
    {nom:'iphone 12',categorie:'Produits électroniques',sousCategorie: 'telephone', prix: 200 ,url_image:"https://th.bing.com/th/id/OIP.ne4luWiFcG49jRLANSs0GAHaIw?rs=1&pid=ImgDetMain"},
    {nom:'Ipad',categorie:'Produits électroniques',sousCategorie: 'tablette', prix: 230 ,url_image:"https://th.bing.com/th/id/OIP.eHVDGyw5nfsvIDNi-2PmtwHaHa?rs=1&pid=ImgDetMain"},
    {nom:'Dell 14" E6430 Laptop',categorie:'Produits électroniques',sousCategorie: 'ordinateur', prix: 320 ,url_image:"https://th.bing.com/th/id/OIP.8BGowKEmswAiORMkfEiSIQHaHa?rs=1&pid=ImgDetMain"},
    {nom:'lenovo notebook',categorie:'Produits électroniques',sousCategorie: 'ordinateur', prix: 340 ,url_image:"https://a-static.mlcdn.com.br/1500x1500/notebook-lenovo-ideapad-s145-intel-core-i7-8gb-1tb-156-full-hd-placa-de-video-2gb/magazineluiza/224068400/706b9022656672f8303abc28955f838a.jpg"},
    {nom:'hp elitebook 840 g3',categorie:'Produits électroniques',sousCategorie: 'ordinateur', prix: 20 ,url_image:"https://th.bing.com/th/id/R.5988a0346ffe7f296f8f20a37ba97fb0?rik=OjWFcp%2fxwD8s%2bg&pid=ImgRaw&r=0"},
    {nom:'Four micro-ondes compact Hitachi MDE25',categorie:'Articles ménagers',sousCategorie: 'micro- onde', prix: 60 ,url_image:"https://th.bing.com/th/id/OIP.uuEYQfrBrT0SauLIO9A7TQHaE6?rs=1&pid=ImgDetMain"},
    {nom:'Machine à laver WFKV9014S',categorie:'Articles ménagers',sousCategorie: 'Machine à laver', prix: 120 ,url_image:"https://hisense.fr/wp-content/uploads/2020/12/WFKV9014S-left-side-1536x1536.png"},
    {nom:'Siemens WM14E364FF',categorie:'Articles ménagers',sousCategorie: 'Machine à laver', prix: 100 ,url_image:"https://www.machinealaver.info/wp-content/uploads/2015/09/Siemens-WM14E364FF-Lave-linge-7-kg.jpg"},
    {nom:'Daewoo KOR 6LBC Four à micro-ondes numérique',categorie:'Articles ménagers',sousCategorie: 'micro- onde', prix: 70 ,url_image:"https://th.bing.com/th/id/R.b636d2c8e0bc332cc449137956b6e238?rik=4meF894hzN%2bcbg&pid=ImgRaw&r=0"},
    {nom:'Chanel N°5, el perfume ss',categorie:'Produits de beauté et de soins personnels',sousCategorie: 'parfum', prix: 7 ,url_image:"https://muycosmopolitas.com/wp-content/uploads/2021/05/eau-parfum-chanel-08052021-in6-scaled.jpg"},
    {nom:'Yves Saint Laurent Opium eau de parfum',categorie:'Produits de beauté et de soins personnels',sousCategorie: 'parfum', prix: 5 ,url_image:"https://www.envie2parfum.fr/img/parfums/thumbs/yves-saint-laurent-opium-90-ml-1568731730_0x1000.jpg"},
    {nom:'kit Pinceau Maquillage Sephora',categorie:'Produits de beauté et de soins personnels',sousCategorie: 'maquillage', prix: 3 ,url_image:"https://www.sephora.ae/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwfae42441/images/hi-res/alternates/PID_alternate1/PID_alternate1_1450/P3666009_1.jpg"},
    {nom:'Éponge de maquillage sans latex',categorie:'Produits de beauté et de soins personnels',sousCategorie: 'maquillage', prix: 0.6 ,url_image:"https://www.cdiscount.com/pdt2/0/2/4/1/700x700/mag0788316175024/rw/eponge-de-maquillage-sans-latex-eponge-a-fond-de-t.jpg"},
    {nom:'kit peigne brosse',categorie:'Produits de beauté et de soins personnels',sousCategorie: 'cheveux', prix: 2 ,url_image:"https://th.bing.com/th/id/R.1f514ccca2f052e6d25100c3e8c5f308?rik=zsQwK7OEk9oMyw&pid=ImgRaw&r=0"},
    {nom:'shampoins',categorie:'Produits de beauté et de soins personnels',sousCategorie: 'cheveux', prix: 1 ,url_image:"https://www.cdiscount.com/pdt2/3/0/5/1/1200x1200/zca691305/rw/garnier-shampoing-ultra-doux-erable-guerisseur.jpg"},
    {nom:"trousse manucure et pédicure",categorie:'Produits de beauté et de soins personnels',sousCategorie: 'manucure et pédicure', prix: 3 ,url_image:"https://images-na.ssl-images-amazon.com/images/I/81gjwkuDicL._AC_SL1500_.jpg"},
    {nom:"pommes 1kg",categorie:'Produits alimentaires',sousCategorie: 'fruits', prix: 1 ,url_image:"https://th.bing.com/th/id/OIP.YRLBKnbBjUurnWhrDmQ6ywHaHa?rs=1&pid=ImgDetMain"},
    {nom:"kiwi 1kg",categorie:'Produits alimentaires',sousCategorie: 'fruits', prix: 1 ,url_image:"https://th.bing.com/th/id/R.276b384c863d5570b60e7d24550bb86f?rik=M1ThW0Aydkp%2fpQ&pid=ImgRaw&r=0"},
    {nom:"Tablettes de chocolat noir, au lait, blanc",categorie:'Produits alimentaires',sousCategorie: 'Chocolats et confiseries', prix: 1 ,url_image:"https://th.bing.com/th/id/R.fb9c205e45c948635dad1fede4935d94?rik=OH1vEkVKpPcIDw&riu=http%3a%2f%2fmiam-images.m.i.pic.centerblog.net%2fo%2f20c99bfd.png&ehk=FDLGuCf0Pqr%2fW4vvVKojNWOxZrersPyiPeCqMeKzUKA%3d&risl=&pid=ImgRaw&r=0"},
    {nom:"Bonbons assortis",categorie:'Produits alimentaires',sousCategorie: 'Chocolats et confiseries', prix: 1 ,url_image:"https://th.bing.com/th/id/OIP.o4HIhaHRe-YDnH0-68eXugHaLl?rs=1&pid=ImgDetMain"},
    {nom:"Fromages",categorie:'Produits alimentaires',sousCategorie: 'Produits laitiers', prix: 1 ,url_image:"https://euimg.eworldtrade.com/uploads/user_products/0/2/product-725312-t-1581248512-o.jpg"},
    {nom:"Yaourts aux fruits",categorie:'Produits alimentaires',sousCategorie: 'Produits laitiers', prix: 1 ,url_image:"https://bing.com/th?id=OSK.9192f2b2585a9a4c7b2fc4fbc7fb44b4"},
    // ... Ajoute d'autres produits avec leurs catégories, sous-catégories et prix

  ];
  
  let panier = {};
  let prixTotal = 0;
  
  function afficherProduits(produitsAffiches) {
    const listeProduits = document.getElementById('listeProduits');
    listeProduits.innerHTML = '';
  
    produitsAffiches.forEach(produit => {
      const produitDiv = document.createElement('div');
      produitDiv.classList.add('produit');
  
      produitDiv.innerHTML = `
        <h2>${produit.nom}</h2>
        <img src="${produit.url_image}" >
        <p>Prix: $${produit.prix}</p>
        <button onclick="ajouterAuPanier('${produit.nom}', ${produit.prix})">Ajouter au Panier</button>
      `;
  
      listeProduits.appendChild(produitDiv);
    });
  }
  
  function afficherSousCategories(categorie) {
    const sousCategories = new Set();
    produits.forEach(produit => {
      if (produit.categorie === categorie) {
        sousCategories.add(produit.sousCategorie);
      }
    });
  
    const listeSousCategories = Array.from(sousCategories);
    const sousCategoriesDiv = document.getElementById('sousCategories');
    sousCategoriesDiv.innerHTML = '';
  
    listeSousCategories.forEach(sousCategorie => {
      const sousCategorieBtn = document.createElement('button');
      sousCategorieBtn.textContent = sousCategorie;
      sousCategorieBtn.onclick = () => filtrerParSousCategorie(categorie, sousCategorie);
      sousCategoriesDiv.appendChild(sousCategorieBtn);
    });
  }
  
  function filtrerParCategorie(categorie) {
    afficherSousCategories(categorie);
  
    let produitsAffiches = [];
    if (categorie === 'Tous') {
      produitsAffiches = produits;
    } else {
      produitsAffiches = produits.filter(produit => produit.categorie === categorie);
    }
  
    afficherProduits(produitsAffiches);
  }
  
  function filtrerParSousCategorie(categorie, sousCategorie) {
    let produitsAffiches = [];
    if (categorie === 'Tous') {
      produitsAffiches = produits.filter(produit => produit.sousCategorie === sousCategorie);
    } else {
      produitsAffiches = produits.filter(produit => produit.categorie === categorie && produit.sousCategorie === sousCategorie);
    }
  
    afficherProduits(produitsAffiches);
  }
  
  function ajouterAuPanier(nom, prix) {
    if (!panier[nom]) {
      panier[nom] = { prix: prix, quantite: 1 };
    } else {
      panier[nom].quantite++;
    }
    prixTotal += prix;
    afficherPanier();
  }
  
  function retirerDuPanier(nom, prix) {
    if (panier[nom] && panier[nom].quantite > 0) {
      panier[nom].quantite--;
      prixTotal -= prix;
      if (panier[nom].quantite === 0) {
        delete panier[nom];
      }
    }
    afficherPanier();
  }
  
  function afficherPanier() {
    const listePanier = document.getElementById('listePanier');
    listePanier.innerHTML = '';
  
    for (const produit in panier) {
      const quantite = panier[produit].quantite;
      const sousTotal = panier[produit].prix * quantite;
  
      const elementPanier = document.createElement('li');
      elementPanier.textContent = `${produit} - Quantité: ${quantite} - Prix total: $${sousTotal}`;
  
      const retirerBtn = document.createElement('button');
      retirerBtn.textContent = 'Retirer';
      retirerBtn.onclick = () => retirerDuPanier(produit, panier[produit].prix);
      
      elementPanier.appendChild(retirerBtn);
      listePanier.appendChild(elementPanier);
    }
  
    const totalElement = document.getElementById('total');
    totalElement.textContent = `Total: $${prixTotal}`;
  }
  
  filtrerParCategorie('Tous');
  