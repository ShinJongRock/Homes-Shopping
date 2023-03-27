const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a product.',
    price: 1000,
    image: 'https://via.placeholder.com/200x150'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is another product.',
    price: 2000,
    image: 'https://via.placeholder.com/200x150'
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is yet another product.',
    price: 3000,
    image: 'https://via.placeholder.com/200x150'
  }
];

const cart = [];

function renderProducts() {
  const productsElement = document.querySelector('.products');
  productsElement.innerHTML = '';
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="price">$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsElement.appendChild(productElement);
  });
}

function renderCart() {
  const cartElement = document.querySelector('.cart ul');
  cartElement.innerHTML = '';
  cart.forEach(item => {
    const cartItemElement = document.createElement('li');
    cartItemElement.innerHTML = `
      <span>${item.name}</span>
      <span class="price">$${item.price}</span>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartElement.appendChild(cartItemElement);
  });
  const totalElement = document.querySelector('.cart .total');
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  totalElement.textContent = `Total: $${total}`;
}

function addToCart(productId) {
  const product = products.find(product => product.id === productId);
  cart.push(product);
  renderCart();
}

function removeFromCart(productId) {
  const index = cart.findIndex(item => item.id === productId);
  if (index !== -1) {
    cart.splice(index, 1);
    renderCart();
  }
}

renderProducts();
// JavaScript 코드
function updateQuantity() {
  const quantityInput = document.getElementById("quantity");
  const newQuantity = parseInt(quantityInput.value);
  if (newQuantity >= 1 && newQuantity <= 10) {
    // 수량이 1에서 10 사이인 경우에만 업데이트
    console.log(`상품 수량을 ${newQuantity}개로 변경합니다.`);
    // 수량 업데이트에 대한 추가 작업
  } else {
    console.log("수량은 1에서 10 사이어야 합니다.");
  }
}