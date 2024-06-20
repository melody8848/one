document.addEventListener('DOMContentLoaded', function() {
  const cartItemsCheckout = document.getElementById('cart-items-checkout');
  const totalPriceElement = document.getElementById('total-price');
  const placeOrderButton = document.getElementById('place-order');

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let totalPrice = 0;

  function updateCheckout() {
    cartItemsCheckout.innerHTML = '';
    totalPrice = 0;
    const ul = document.createElement('ul');

    cart.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `${item.name} <span>${item.price}</span>`;
      ul.appendChild(li);

      const price = parseFloat(item.price.replace('￥', ''));
      totalPrice += price;
    });

    cartItemsCheckout.appendChild(ul);
    totalPriceElement.textContent = `总价: ￥${totalPrice.toFixed(2)}`;
  }

  placeOrderButton.addEventListener('click', function() {
    if (cart.length > 0) {
      alert('订单已下单成功！');
      cart = [];
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCheckout();
    } else {
      alert('购物车为空，请添加商品到购物车后再结算。');
    }
  });

  updateCheckout();
});
