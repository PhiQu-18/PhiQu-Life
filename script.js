const products = [
  { id: 1, name: "Gantungan AR", price: 25000, image: "https://via.placeholder.com/200x150" },
  { id: 2, name: "ID Card AR", price: 30000, image: "https://via.placeholder.com/200x150" },
];

const list = document.getElementById("product-list");

if (list) {
  products.forEach(p => {
    list.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p>Rp${p.price.toLocaleString()}</p>
        <button onclick="addToCart(${p.id})">Tambah ke Keranjang</button>
      </div>
    `;
  });
}

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = products.find(p => p.id === productId);
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${item.name} ditambahkan ke keranjang!`);
}
