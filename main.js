const products = [
  {id: 1, title: 'Notebook', price: 20000},
  {id: 2, title: 'Mouse', price: 1500},
  {id: 3, title: 'Keyboard', price: 5000},
  {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price, img = 'http://placehold.it/300x50') => {
  return `<div class="product-item">
            <h3>${title}</h3>
            <p>${price}</p>
            <img src=${img}></img>
            <button class="by-btn">Добавить в корзину</button>
          </div>`;
};

const renderProducts = (list) => {
  const productList = list.map((product) => {
      return renderProduct(product.title, product.price);
  });
  // console.log(productList);

    let [a, b, c, d] = productList
    document.querySelector('.products').innerHTML = a + b + c + d;
    // Пробовал через цикл вытащить каждое значене элемента массива, но
    // через querySelector('.products').innerHTML так сделать не получилось,
    // выводился только последний элемент. Курс JS-1 мне, почему-то, не открылся,
    // поэтому я начал сразу с продвинутого левела, буду стараться нагонять))
    // Преподаватель вы просто супер! Безумно интересно и приятно вас слушать! Спасибо!


}

renderProducts(products);
