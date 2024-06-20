document.addEventListener('DOMContentLoaded', function() {
  // 购物车功能
  const cartDropdown = document.getElementById('cart-dropdown');
  const cartItems = document.getElementById('cart-items');
  const checkoutButton = document.getElementById('checkout');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];//从本地存储中获取购物车数据，没有则初始化为空数组。
  //更新购物车内容
  function updateCart() {
    cartItems.innerHTML = '';
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - ${item.price}`;
      cartItems.appendChild(li);
    });
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  //为所有“添加到购物车”按钮添加点击事件，将商品信息添加到购物车并更新显示。
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
      const product = this.parentElement;
      const itemName = product.querySelector('h3').textContent;
      const itemPrice = product.querySelector('p').textContent;
      cart.push({ name: itemName, price: itemPrice });
      updateCart();
    });
  });

  updateCart();

  // // 显示购物车浮窗
  // const cartLink = document.getElementById('cart');
  // cartLink.addEventListener('mouseover', function() {
  //   cartDropdown.style.display = 'block';
  // });

  // cartLink.addEventListener('mouseleave', function() {
  //   cartDropdown.style.display = 'none';
  // });

  // 用户登录和注册表单显示
  const loginLink = document.getElementById('login');
  const registerLink = document.getElementById('register');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
 //点击登录链接时显示登录表单，隐藏注册表单。
  loginLink.addEventListener('click', function(event) {
    event.preventDefault();
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
  });

  registerLink.addEventListener('click', function(event) {
    event.preventDefault();
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
  });

  // 轮播图
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');
  function showSlides() {
    slides.forEach((slide, index) => {
      slide.style.display = index === slideIndex ? 'block' : 'none';
    });
    slideIndex = (slideIndex + 1) % slides.length;
  }
  setInterval(showSlides, 3000);// 定时器 每隔 3 秒切换一次幻灯片。
  showSlides();

  // 秒杀活动倒计时
  function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const endTime = new Date('2024-12-31T23:59:59').getTime();
    const now = new Date().getTime();
    const timeRemaining = endTime - now;

    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (timeRemaining < 0) {
      countdownElement.textContent = "00:00:00";
    }
  }
  setInterval(updateCountdown, 1000);

  

  // 主题切换功能
  const themeSelect = document.getElementById('theme-select');
  const currentTheme = localStorage.getItem('theme') || 'default'; //从本地存储中获取当前主题，没有则默认为“default”。
  document.body.classList.add(`${currentTheme}-theme`);
  themeSelect.value = currentTheme;

  themeSelect.addEventListener('change', function() {
    document.body.classList.remove('default-theme', 'dark-theme', 'light-theme');
    document.body.classList.add(`${this.value}-theme`);
    localStorage.setItem('theme', this.value);
  });

  // 浮动广告关闭功能
  const floatingAd = document.getElementById('floating-ad');
  const closeAd = document.getElementById('close-ad');

  closeAd.addEventListener('click', function() {
    floatingAd.style.display = 'none';
  });
  // 图片放大功能
  const zoomImages = document.querySelectorAll('.zoom');
  zoomImages.forEach(img => {
    img.addEventListener('mouseover', function() {
      img.style.transform = 'scale(1.5)';
    });

    img.addEventListener('mouseout', function() {
      img.style.transform = 'scale(1)';
    });
  });
});


 
