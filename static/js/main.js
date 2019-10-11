// ここにjs書く
inview('Services');
inview('About');
inview('Contact');

anime({
  targets: '#gearblue',
  translateY: -15,
  duration: 2000,
  easing: 'easeInOutSine',
  direction: 'alternate',
  loop: true
});
anime({
  targets: '#gearpink',
  translateY: -20,
  duration: 3000,
  easing: 'easeInOutSine',
  direction: 'alternate',
  loop: true
});
anime({
  targets: '#gearblue .gear',
  rotate: '1turn',
  duration: 2000,
  // easing: 'easeInOutSine',
  easing: 'easeInOutSine',
  direction: 'alternate',
  loop: true
});
anime({
  targets: '#gearpink .gear',
  rotate: '1turn',
  duration: 3000,
  // easing: 'easeInOutSine',
  easing: 'easeInOutSine',
  direction: 'alternate',
  loop: true
});
