const products = document.querySelectorAll('.product');

products.forEach((product) => {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const closeButton = document.createElement('button');
  closeButton.classList.add('close');
  closeButton.innerText = 'X';

  const title = document.createElement('h2');
  title.innerText = product.querySelector('h4').innerText;

  const price = document.createElement('p');
  price.innerText = product.querySelector('p').innerText;

  modal.appendChild(closeButton);
  modal.appendChild(title);
  modal.appendChild(price);

  product.addEventListener('click', () => {
    document.body.appendChild(modal);
  });

  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
});
