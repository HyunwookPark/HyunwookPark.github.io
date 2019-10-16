// ここにjs書く
inview('About-school');
inview('Learning');
inview('School');
inview('Pricing');

anime({
    targets:　'#Title .letsprograming',
    opacity: 1,
    translateY: [50, 0],
    duration: 1000, //期間
    rotate: {
      value: 3,
      duration: 200,
      easing: 'easeInOutSine',
      delay: 1000
    },
    delay: function(el, i, l) {
      return (i * 500);
    },
    endDelay: function(el, i, l) {
      return (l - i) * 500;
    }
});
anime({
    targets:　'#Title .say',
    opacity: 1,
    translateY: [20, 0],
    duration: 2000, //期間
    delay: function(el, i, l) {
      return (i * 1000) + 1500;
    },
    endDelay: function(el, i, l) {
      return (l - i) * 1000 + 1500;
    }
});
anime({
  targets: '.logo',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 200,
  delay: 3000,
  rotate: 3,
  direction: 'alternate',
  loop: true
});
