function ready() {
    document.getElementById('gateway-content').remove();
    document.querySelector('.css-mcm29f').setAttribute('style', 'position:relative');
    document.querySelector('.css-gx5sib').setAttribute('style', 'background: transparent');
    document.getElementById('top-wrapper').remove();
    document.querySelectorAll(`div[id^='google']`).forEach(el => el.remove());
    document.querySelectorAll(`div[id^='story-ad']`).forEach(el => el.remove());
    scroll(0,0);
}
window.addEventListener('load', ready);