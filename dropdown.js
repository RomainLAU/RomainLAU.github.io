document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('#burger-button');
  const littleMenu = document.querySelector('#little-menu');
  const subMenu = document.querySelector('#sub-menu');

  burgerButton.style.backgroundImage = "url('/assets/images/bars.svg')";
  subMenu.style.display = 'none';

  const removeSubmenu = () => {
    burgerButton.style.backgroundImage = "url('/assets/images/bars.svg')";
    subMenu.style.transform = 'translateY(-100%)';

    setTimeout(() => {
      subMenu.style.display = 'none';
    }, 810);
  };

  littleMenu.addEventListener('click', () => {
    if (subMenu.style.transform == 'translateY(0%)') {
      removeSubmenu();
    } else {
      subMenu.style.display = 'flex';
      burgerButton.style.backgroundImage = "url('/assets/images/xmark.svg')";

      setTimeout(() => {
        subMenu.style.transform = 'translateY(0%)';
      }, 10);
    }
  });

  littleMenu.addEventListener('mouseleave', removeSubmenu);

  littleMenu.addEventListener('touchleave', removeSubmenu);

  littleMenu.addEventListener('touchcancel', removeSubmenu);

  document.addEventListener('scroll', removeSubmenu);
});
