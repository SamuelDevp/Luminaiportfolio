const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('-translate-x-full');
      overlay.classList.toggle('hidden');
    });

    overlay.addEventListener('click', () => {
      mobileMenu.classList.add('-translate-x-full');
      overlay.classList.add('hidden');
    });