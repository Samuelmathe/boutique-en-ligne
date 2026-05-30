const produits = [
  { nom: 'T-shirt', categorie: 'Vêtements', sousCategorie: 'T-shirts', prix: 20, url_image: 'https://th.bing.com/th/id/R.81056222234d24e5436cfeac5463060b?rik=2MbhMqo5lDVlHA&pid=ImgRaw&r=0' },
  { nom: 'Jeans', categorie: 'Vêtements', sousCategorie: 'Jeans', prix: 45, url_image: 'https://th.bing.com/th/id/OIP.GvX3lSqd21g0Zq1axjWjVwHaMJ?rs=1&pid=ImgDetMain' },
  { nom: 'Robe', categorie: 'Vêtements', sousCategorie: 'Robes', prix: 60, url_image: 'https://th.bing.com/th/id/R.411aa7b6ac5050ccc30a226f49dbacbb?rik=TBfyfNnjUG3SYA&pid=ImgRaw&r=0' },
  { nom: 'Talons hauts', categorie: 'Chaussures', sousCategorie: 'Talons hauts', prix: 80, url_image: 'https://th.bing.com/th/id/OIP.iQJaAY0mToGR7Ld9l5IGXAHaGx?rs=1&pid=ImgDetMain' },
  { nom: 'Baskets', categorie: 'Chaussures', sousCategorie: 'Baskets', prix: 70, url_image: 'https://contents.mediadecathlon.com/p1731519/k$c6404d5ac9dfe1afc0c583d9864d295e/sq/CHAUSSURE+DE+BASKETBALL+HOMME+ELEVATE+900+TIGE+MID+BLANCHE.jpg' },
  { nom: 'Rolex', categorie: 'Accessoires de mode', sousCategorie: 'Montre', prix: 30, url_image: 'https://th.bing.com/th/id/OIP.A4W4XzexHDPrrHxsUdxUbgHaHa?rs=1&pid=ImgDetMain' },
  { nom: 'G-Shock', categorie: 'Accessoires de mode', sousCategorie: 'Montre', prix: 20, url_image: 'https://th.bing.com/th/id/OIP.QCPYtw-LlJgwrM7cqF_DBwHaJ3?rs=1&pid=ImgDetMain' },
  { nom: 'Collier perle', categorie: 'Accessoires de mode', sousCategorie: 'Collier', prix: 20, url_image: 'https://th.bing.com/th/id/OIP.jMKOF4IWzNax1J7L_JqaVAHaFi?rs=1&pid=ImgDetMain' },
  { nom: 'Samsung S10', categorie: 'Produits électroniques', sousCategorie: 'Téléphone', prix: 120, url_image: 'https://th.bing.com/th/id/OIP.cWrf-bEqiJEmSNdg-EO5WgHaGM?rs=1&pid=ImgDetMain' },
  { nom: 'iPhone 12', categorie: 'Produits électroniques', sousCategorie: 'Téléphone', prix: 200, url_image: 'https://th.bing.com/th/id/OIP.ne4luWiFcG49jRLANSs0GAHaIw?rs=1&pid=ImgDetMain' },
  { nom: 'iPad', categorie: 'Produits électroniques', sousCategorie: 'Tablette', prix: 230, url_image: 'https://th.bing.com/th/id/OIP.eHVDGyw5nfsvIDNi-2PmtwHaHa?rs=1&pid=ImgDetMain' },
  { nom: 'Dell E6430', categorie: 'Produits électroniques', sousCategorie: 'Ordinateur', prix: 320, url_image: 'https://th.bing.com/th/id/OIP.8BGowKEmswAiORMkfEiSIQHaHa?rs=1&pid=ImgDetMain' },
  { nom: 'Lenovo IdeaPad', categorie: 'Produits électroniques', sousCategorie: 'Ordinateur', prix: 340, url_image: 'https://a-static.mlcdn.com.br/1500x1500/notebook-lenovo-ideapad-s145-intel-core-i7-8gb-1tb-156-full-hd-placa-de-video-2gb/magazineluiza/224068400/706b9022656672f8303abc28955f838a.jpg' },
  { nom: 'HP EliteBook 840', categorie: 'Produits électroniques', sousCategorie: 'Ordinateur', prix: 280, url_image: 'https://th.bing.com/th/id/R.5988a0346ffe7f296f8f20a37ba97fb0?rik=OjWFcp%2fxwD8s%2bg&pid=ImgRaw&r=0' },
];

const CATEGORIES = ['Tous', ...new Set(produits.map((p) => p.categorie))];

let panier = {};
let prixTotal = 0;
let filtreCategorie = 'Tous';
let filtreSousCategorie = null;
let recherche = '';

const els = {
  listeProduits: document.getElementById('listeProduits'),
  categoryList: document.getElementById('category-list'),
  subcategoryList: document.getElementById('subcategory-list'),
  subcategoryPanel: document.getElementById('subcategory-panel'),
  catalogueTitle: document.getElementById('catalogue-title'),
  catalogueMeta: document.getElementById('catalogue-meta'),
  emptyState: document.getElementById('empty-state'),
  listePanier: document.getElementById('listePanier'),
  cartEmpty: document.getElementById('cart-empty'),
  total: document.getElementById('total'),
  cartCount: document.getElementById('cart-count'),
  cartPanel: document.getElementById('cart-panel'),
  cartToggle: document.getElementById('cart-toggle'),
  cartClose: document.getElementById('cart-close'),
  cartBackdrop: document.getElementById('cart-backdrop'),
  search: document.getElementById('search'),
  toast: document.getElementById('toast'),
};

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function showToast(msg) {
  els.toast.textContent = msg;
  els.toast.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => els.toast.classList.remove('show'), 2200);
}

function setCartOpen(open) {
  els.cartPanel.classList.toggle('open', open);
  els.cartPanel.setAttribute('aria-hidden', open ? 'false' : 'true');
  els.cartToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  document.body.style.overflow = open ? 'hidden' : '';
}

function produitsFiltres() {
  const q = recherche.trim().toLowerCase();
  return produits.filter((p) => {
    if (filtreCategorie !== 'Tous' && p.categorie !== filtreCategorie) return false;
    if (filtreSousCategorie && p.sousCategorie !== filtreSousCategorie) return false;
    if (q && !p.nom.toLowerCase().includes(q)) return false;
    return true;
  });
}

function renderCategories() {
  els.categoryList.innerHTML = CATEGORIES.map(
    (cat) =>
      `<button type="button" class="chip${cat === filtreCategorie ? ' active' : ''}" data-cat="${escapeHtml(cat)}">${escapeHtml(cat)}</button>`,
  ).join('');

  els.categoryList.querySelectorAll('.chip').forEach((btn) => {
    btn.addEventListener('click', () => {
      filtreCategorie = btn.dataset.cat;
      filtreSousCategorie = null;
      renderSubcategories();
      renderCategories();
      renderProducts();
    });
  });
}

function renderSubcategories() {
  if (filtreCategorie === 'Tous') {
    els.subcategoryPanel.hidden = true;
    return;
  }
  const subs = [...new Set(produits.filter((p) => p.categorie === filtreCategorie).map((p) => p.sousCategorie))];
  els.subcategoryPanel.hidden = false;
  els.subcategoryList.innerHTML =
    `<button type="button" class="chip${!filtreSousCategorie ? ' active' : ''}" data-sub="">Toutes</button>` +
    subs
      .map(
        (sub) =>
          `<button type="button" class="chip${filtreSousCategorie === sub ? ' active' : ''}" data-sub="${escapeHtml(sub)}">${escapeHtml(sub)}</button>`,
      )
      .join('');

  els.subcategoryList.querySelectorAll('.chip').forEach((btn) => {
    btn.addEventListener('click', () => {
      filtreSousCategorie = btn.dataset.sub || null;
      renderSubcategories();
      renderProducts();
    });
  });
}

function renderProducts() {
  const list = produitsFiltres();
  els.catalogueTitle.textContent =
    filtreCategorie === 'Tous' ? 'Tous les produits' : filtreCategorie;
  els.catalogueMeta.textContent = `${list.length} article${list.length > 1 ? 's' : ''}`;
  els.emptyState.hidden = list.length > 0;

  els.listeProduits.innerHTML = list
    .map(
      (p, i) => `
    <article class="product-card" style="animation-delay:${i * 0.04}s">
      <div class="product-img-wrap">
        <img src="${escapeHtml(p.url_image)}" alt="" loading="lazy" width="320" height="240">
      </div>
      <div class="product-body">
        <span class="product-cat">${escapeHtml(p.sousCategorie)}</span>
        <h3>${escapeHtml(p.nom)}</h3>
        <p class="product-price">${p.prix} $</p>
        <button type="button" class="btn-add" data-nom="${escapeHtml(p.nom)}" data-prix="${p.prix}">Ajouter au panier</button>
      </div>
    </article>`,
    )
    .join('');

  els.listeProduits.querySelectorAll('.btn-add').forEach((btn) => {
    btn.addEventListener('click', () => {
      ajouterAuPanier(btn.dataset.nom, Number(btn.dataset.prix), btn);
    });
  });
}

function ajouterAuPanier(nom, prix, btn) {
  panier[nom] = panier[nom] || { prix, quantite: 0 };
  panier[nom].quantite++;
  prixTotal += prix;
  btn.classList.add('added');
  setTimeout(() => btn.classList.remove('added'), 400);
  afficherPanier();
  showToast(`${nom} ajouté au panier`);
  updateCartCount();
}

function retirerDuPanier(nom, prix) {
  if (!panier[nom]) return;
  panier[nom].quantite--;
  prixTotal -= prix;
  if (panier[nom].quantite <= 0) delete panier[nom];
  afficherPanier();
  updateCartCount();
}

function updateCartCount() {
  const n = Object.values(panier).reduce((s, x) => s + x.quantite, 0);
  els.cartCount.textContent = String(n);
}

function afficherPanier() {
  const entries = Object.entries(panier);
  els.cartEmpty.hidden = entries.length > 0;
  els.listePanier.innerHTML = entries
    .map(([nom, { prix, quantite }]) => {
      const sousTotal = prix * quantite;
      return `<li>
        <strong>${escapeHtml(nom)} × ${quantite}</strong>
        <span>${sousTotal} $</span>
        <button type="button" class="btn-remove" data-nom="${escapeHtml(nom)}" data-prix="${prix}">Retirer</button>
      </li>`;
    })
    .join('');

  els.listePanier.querySelectorAll('.btn-remove').forEach((btn) => {
    btn.addEventListener('click', () => retirerDuPanier(btn.dataset.nom, Number(btn.dataset.prix)));
  });

  els.total.textContent = `${prixTotal} $`;
}

els.cartToggle.addEventListener('click', () => setCartOpen(!els.cartPanel.classList.contains('open')));
els.cartClose.addEventListener('click', () => setCartOpen(false));
els.cartBackdrop.addEventListener('click', () => setCartOpen(false));

els.search.addEventListener('input', () => {
  recherche = els.search.value;
  renderProducts();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setCartOpen(false);
});

renderCategories();
renderSubcategories();
renderProducts();
afficherPanier();
updateCartCount();
