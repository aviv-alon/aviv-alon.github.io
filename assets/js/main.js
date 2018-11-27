
// Selectors
const body = document.querySelector('body'),
  banner  = document.querySelector('#banner');


// Breakpoints.
breakpoints({
  xlarge:	'(max-width: 1680px)',
  large:	'(max-width: 1280px)',
  medium:	'(max-width: 980px)',
  small:	'(max-width: 736px)',
  xsmall:	'(max-width: 480px)'
});


// Play initial animations on page load.
window.addEventListener('load', () => {
  window.setTimeout(() =>
    body.classList.remove('is-preload')
  , 5);
});


// Header.
// if (1) {
//   console.log('banner.length > 0');
//   window.addEventListener('resize',() => window.trigger('scroll'));
//
//   banner.addEventListener('scroll', () => {
//     console.log('scroll');
//   });
//
// }
//
// window.addEventListener('scroll', () => {
//   window.setTimeout(() =>
//     body.classList.remove('is-preload')
//   , 50);
// });
//
// window.scrollX()
// console.log(window.scrollX);
// if (window.scrollX > 100) {
//   window.scroll(0,0);
//   console.log(window.scrollX);
// }

// banner.addEventListener('click', (e) => {
//   if (Game.isStepPre()){
//     changeToStyleStepReady();
//   }
// });
