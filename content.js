function ready() {
  setTimeout(() => {
    document.getElementById('gateway-content').remove();
    setTimeout(document.querySelector('.css-mcm29f').setAttribute('style', 'position:relative'),1000);
    setTimeout(document.querySelector('.css-gx5sib').setAttribute('style', 'background: transparent'),1000);
    setTimeout(document.getElementById('top-wrapper').remove(),1000);
    setTimeout(document.getElementById('story-ad-1-wrapper').remove(),1000);
    setTimeout(document.getElementById('story-ad-2-wrapper').remove(),1000);
    setTimeout(document.getElementById('story-ad-3-wrapper').remove(),1000);
    setTimeout(document.querySelectorAll(`div[id^='google']`).forEach(el => el.remove()),1500);
    scroll(0,0);
  },1500);
}

document.addEventListener('DOMContentLoaded', ready);