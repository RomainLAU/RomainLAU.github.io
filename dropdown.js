document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('#burger-button');
  const littleMenu = document.querySelector('#little-menu');
  const subMenu = document.querySelector('#sub-menu');

  burgerButton.style.backgroundImage = "url('/assets/images/bars.svg')";
  subMenu.style.display = 'none';

  const removeSubmenu = () => {
    burgerButton.style.backgroundImage = "url('/assets/images/bars.svg')";
    subMenu.style.gridTemplateRows = 'repeat(4, 0fr)';
    subMenu.style.opacity = '0';

    setTimeout(() => {
      subMenu.style.display = 'none';
    }, 400);
  };

  littleMenu.addEventListener('click', () => {
    if (subMenu.style.opacity == '1') {
      removeSubmenu();
    } else {
      subMenu.style.display = 'grid';

      setTimeout(() => {
        subMenu.style.gridTemplateRows = 'repeat(4, 1fr)';
        subMenu.style.opacity = '1';
        burgerButton.style.backgroundImage = "url('/assets/images/xmark.svg')";
      }, 10);
    }
  });

  littleMenu.addEventListener('mouseleave', removeSubmenu);

  littleMenu.addEventListener('touchleave', removeSubmenu);

  littleMenu.addEventListener('touchcancel', removeSubmenu);

  document.addEventListener('scroll', removeSubmenu);
});
