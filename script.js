const products = [
  { id: 1, name: "Gantungan AR", price: 15000, image: "produk-design/234.jpg" },
];

const list = document.getElementById("product-list");

if (list) {
  products.forEach(p => {
    list.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p>Rp${p.price.toLocaleString()}</p>
        <a href="cart.html?product=${p.id}"><button>Lihat Deskripsi</button></a>
      </div>
    `;
  });
}
