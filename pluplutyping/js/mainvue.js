(function() {
  'use strict';

  var vm = new Vue({
    el: '#typingapp',
    data: {
      okcount: 0,
      ngcount: 0,
      current: 1,
      words: [],
      isStarted: false,
      currentWord: '',
      mean: '',
      voice: 1,
      datakbn: '1',
      onKeybord: '1',
      onFinger: '1',
    },
    methods: {
      test: function() {
        console.log(this.onKeybord);
      },
      shuffle: function() {
        this.current = 1;
        setTimeout(function() {
          console.log(vm.words.length);
          var index = Math.floor(Math.random() * vm.words.length);
          console.log(vm.words[0]);
          vm.currentWord = vm.words[index].word;
          vm.mean = vm.words[index].mean;
          vm.rmClass();
          vm.say();
          setKeyColor(vm.currentWord.slice( 0, 1));
        }, 200);
      },
      rmClass: function() {
        $("#target li").removeClass("success");
      },
      start: function() {
        // console.log("start");
        this.isStarted = true;
        console.log("datakbn" + this.datakbn);
        var _this = this;
        // axios.get('words/' + this.datakbn)
        axios
        .get('https://hyunwookpark.github.io/pluplutyping/json/' + this.datakbn + '.json')
        .then(function (response) {
          console.log(response.data);
          _this.words = response.data;
          // this.words = response;
          // _this.words = [{"word":"ibis", "mean":"コウノトリ、トキ"}];
          // _this.playSound(go);
          _this.shuffle();
        })
        .catch(function (error) {
          console.log(error);
        });
        // if (this.datakbn === "1") { //アルファベット
        // } else if (this.datakbn === "食べ物英単語") {
        //   this.words = foods;
        //   // this.playSound(go);
        //   this.shuffle();
        // } else if (this.datakbn === "難しい英単語") {
        //   this.words = difficult;
        //   // this.playSound(go);
        //   this.shuffle();
        // } else if (this.datakbn === "PPAP") {
        //   this.words = ppap;
        //   // this.playSound(go);
        //   this.shuffle();
        // } else if (this.datakub === "5") {
        // }
      },
      playSound: function(sound) {
        sound.pause();
        sound.currentTime = 0;
        sound.play();
      },
      typing: function() {
        console.log("type!!")
      },
      countOK: function() {
        //OKの音を出す
        this.playSound(oksound);
        //#COUNTの数字を1足す
        if (this.datakbn === "1") {
          this.okcount++;
        } else if (this.datakbn === "2") {
          this.okcount += 2;
        } else if (this.datakbn === "3") {
          this.okcount+= 3;
        } else if (this.datakbn === "4") {
          this.okcount+= 3;
        } else if (this.datakbn === "5") {
          this.okcount+= 3;
        }
      },
      countNG: function() {
        //OKの音を出す
        this.playSound(ngsound);
        //#COUNTの数字を1引く
        if (this.datakbn === "1") {
          this.ngcount++;
        } else if (this.datakbn === "2") {
          this.ngcount += 2;
        } else if (this.datakbn === "3") {
          this.ngcount += 3;
        } else if (this.datakbn === "4") {
          this.ngcount += 3;
        } else if (this.datakbn === "5") {
          this.ngcount += 3;
        }
      },
      say: function() {
        var synth = window.speechSynthesis;
        var speech = new SpeechSynthesisUtterance();
        var voices = synth.getVoices();
        speech.voice = voices[1]; // 3:女の声 5:男の声
        speech.lang = "en-US"; // en-US or ja-JP
        // speech.lang = "ja-JP"; // en-US or ja-JP
        // speech.volume = 1.0;
        speech.rate = 0.8; // 0.1-10
        speech.pitch = 1.0;
        // speech.text = "Let's use Web Speech API";
        speech.text = this.currentWord;
        synth.speak(speech);
      }
    },
  });

  $("body").keypress(function( e ) {
    console.log(e.key);
    if (!vm.isStarted) {
      if (13 === e.keyCode) {
        vm.start();
      }
    } else {
      var inp = $("#target li:nth-child(" + vm.current + ")");
      var c = (e.key).toUpperCase();
      if (inp.text().toUpperCase() === c) {
        inp.addClass('success');
        vm.current++;
        vm.countOK();
        if ($("#target li").length < vm.current) {
          vm.shuffle();
        } else {
          setKeyColor(vm.currentWord.slice( vm.current - 1, vm.current));
        }
      } else {
        vm.countNG();
      }
      // checkCount();
    }

  });

})();

function setKeyColor(key) {
  removeKeyColor()
  $('.left1').each(function(){
    if ($(this).text() == key.toUpperCase()) {
      $(this).addClass('target');
      $('.left1oya').addClass('target');
    }
  });
  $('.left2').each(function(){
    if ($(this).text() == key.toUpperCase()) {
      $(this).addClass('target');
      $('.left2oya').addClass('target');
    }
  });
  $('.left3').each(function(){
    if ($(this).text() == key.toUpperCase()) {
      $(this).addClass('target');
      $('.left3oya').addClass('target');
    }
  });
  $('.left4').each(function(){
    if ($(this).text() == key.toUpperCase()) {
      $(this).addClass('target');
      $('.left4oya').addClass('target');
    }
  });
  $('.right1').each(function(){
    if ($(this).text() == key.toUpperCase()) {
      $(this).addClass('target');
      $('.right1oya').addClass('target');
    }
  });
  $('.right2').each(function(){
    if ($(this).text() == key.toUpperCase()) {
      $(this).addClass('target');
      $('.right2oya').addClass('target');
    }
  });
  $('.right3').each(function(){
    if ($(this).text() == key.toUpperCase()) {
      $(this).addClass('target');
      $('.right3oya').addClass('target');
    }
  });
  $('.right4').each(function(){
    if ($(this).text() == key.toUpperCase()) {
      $(this).addClass('target');
      $('.right4oya').addClass('target');
    }
  });
}


function removeKeyColor() {
  $('.target').removeClass('target');
}
