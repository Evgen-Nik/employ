window.addEventListener('DOMContentLoaded', () => {

    // navbar

    const navbarItem = document.getElementsByClassName("navbar__item");
    const toggleNavbarClass = function() {
        document.querySelectorAll('.navbar__item').forEach((item, i) => {
            if (item !== this) {
                item.classList.remove("active");
            }
        });
        this.classList.contains("active") ? this.classList.remove("active") : this.classList.add("active")
    }
    Array.from(navbarItem).forEach(function(element) {
        element.addEventListener('click', toggleNavbarClass);
    });

    // бургер

    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__menu-item'),
    hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__menu_active');
        });
    });

    // //select

    document.addEventListener("click", function(e) {
        const selectContainer = e.target.closest('.select');
        if (!selectContainer) return;
      
        const selectOptions = selectContainer.querySelector('.select__options');
        const selectStyled = selectContainer.querySelector('.select__styled');
      
        if (selectOptions.style.display === 'block') {
          selectOptions.style.display = 'none';
          selectStyled.classList.remove('open');
        } else {
          selectOptions.style.display = 'block';
          selectStyled.classList.add('open');
        }
      });
      
      document.querySelectorAll('.select__option').forEach(option => {
        option.addEventListener('click', function() {
          const select = this.closest('.select').querySelector('select');
          select.value = this.getAttribute('data-value');
          this.closest('.select__options').style.display = 'none';
      
          // Удаляем класс active из всех элементов списка
          this.closest('.select').querySelectorAll('.select__option').forEach(option => {
            option.classList.remove('active');
          });
      
          // Добавляем класс active к выбранному элементу
          this.classList.add('active');
      
          const selectStyled = this.closest('.select').querySelector('.select__styled');
          selectStyled.innerText = this.innerText;
          selectStyled.classList.remove('open');
        });
      });

    // ползунок

    const slider = document.getElementById("rating-slider");
    const output = document.getElementById("rating-counter");
    output.innerHTML = slider.value + ' %'; 


    slider.oninput = function() {
        output.innerHTML = this.value + ' %';
    }
});

