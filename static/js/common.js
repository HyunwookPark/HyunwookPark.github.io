/**
 * スクロールで表示されたときにふわっと現れる。
 * id名を指定してください。
 * offクラス設定の部分がまとめて表示されます。
 */
function inview(elid) {
  document.addEventListener('scroll',function(){
      var windowHeight = window.innerHeight;
      var targetTop = document.getElementById(elid).getBoundingClientRect().top;
      if(targetTop<windowHeight-100){
          anime({
              targets:　'#' + elid + ' .off',
              opacity: 1,
              translateY: [50, 0],
              duration: 2000, //期間
              delay: 500, //待ち
          });
          document.removeEventListener('scroll',arguments.callee);
      }
  });
}
/**
 * スクロールで表示されたときにふわっと現れる。
 * id名を指定してください。
 * offクラス設定の部分が順に表示されます。
 */
function inviewSub(elid) {
  document.addEventListener('scroll',function(){
      var windowHeight = window.innerHeight;
      var targetTop = document.getElementById(elid).getBoundingClientRect().top;
      if(targetTop<windowHeight-100){
          anime({
              targets:　'#' + elid + ' .off',
              opacity: 1,
              translateY: [50, 0],
              duration: 2000, //期間
              delay: function(el, i, l) {
                return (i * 100);
              },
              endDelay: function(el, i, l) {
                return (l - i) * 100;
              }
          });
          document.removeEventListener('scroll',arguments.callee);
      }
  });
}
anime({
  targets: '.nav-link',
  translateY: [-50, 0],
  opacity: 1,
  delay: function(el, i, l) {
    return i * 100;
  },
  endDelay: function(el, i, l) {
    return (l - i) * 100;
  }
});

anime({
  targets: '.logo path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 3000,
  // delay: function(el, i) { return i * 250 },
  // direction: 'alternate',
  // loop: true
});
