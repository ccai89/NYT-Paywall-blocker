function ready() {
  setTimeout(() => {
    document.getElementById('gateway-content').remove();
    setTimeout(document.querySelector('.css-mcm29f').setAttribute('style', 'position:relative'),1000);
    setTimeout(document.querySelector('.css-gx5sib').setAttribute('style', 'background: transparent'),1000);
    setTimeout(document.getElementById('top-wrapper').remove(),2500);
    setTimeout(document.querySelectorAll(`div[id^='google']`).forEach(el => el.remove()),2500);
    setTimeout(document.querySelectorAll(`div[id^='story-ad']`).forEach(el => el.remove()),2500);
    scroll(0,0);
  },1500);
}

document.addEventListener('DOMContentLoaded', ready);