const form = document.querySelector('form');
const textIn = document.querySelector('#inMsg');
const navLinks = document.querySelectorAll('a[href^="#"]');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  criarLinkWpp();
});

function criarLinkWpp() {
  let areaText = form.inMsg.value;
  let linkNum = 'https://api.whatsapp.com/send?phone=5538988278673';
  let linkFinal = `${linkNum}&text=${encodeURIComponent(areaText)}`;
  window.open(linkFinal, '__blank');
}

navLinks.forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });
    }
  });
});
