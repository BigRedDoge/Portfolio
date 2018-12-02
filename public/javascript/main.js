$(function() {

  var words = [' Student', ' Programmer', ' Leader', ' Builder', ' Creator'];
  var x = 0;

  (function typewriter() {
    var speed = function(type) {
      if (type === 'write') {
        let min = Math.ceil(95);
        let max = Math.floor(120);
        return Math.floor(Math.random() * (max - min)) + min;
      } else if (type = 'delete') {
        let min = Math.ceil(65);
        let max = Math.floor(80);
        return Math.floor(Math.random() * (max - min)) + min;
      }
    }
    if (x === words.length) {
      x = 0;
      typewriter();
    } else if (x < words.length) {
      w = 0;
      d = 0;
      (function writeWord() {
        setTimeout(function() {
          $('#typewriter-after').append(words[x][w]);
          w++;
          if (w === words[x].length) {
            setTimeout(() => { deleteWord() }, 350);
          } else {
            writeWord();
          }
        }, speed('write'));
      })();
      function deleteWord() {
        setTimeout(function() {
          $('#typewriter-after').text(function(i, orig) {
            $('#typewriter-after').text(orig.slice(0, orig.length - 1));
          });
          d++;
          if (d === words[x].length) {
            x++;
            setTimeout(() => { typewriter() }, 100);
          } else {
            deleteWord();
          }
        }, speed('delete'));
      }
    }
  })();

  $('#home-nav, #about-nav, #portfolio-nav').on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    console.log(hash);
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function() {
      return false;
    });
  });

  var atTop = true;
  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 300 && atTop) {
      $('.navbar').slideUp(275);
      $('.navbar').queue(function() {
        $('.navbar').toggleClass('bg-dark');
        $('.navbar').dequeue();
      });
      $('.navbar').slideDown(275);

      atTop = false;
    } else if (height < 300 && !atTop) {
      $('.navbar').slideUp(275);
      $('.navbar').queue(function() {
        $('.navbar').toggleClass('bg-dark');
        $('.navbar').dequeue();
      });
      $('.navbar').slideDown(275);
      atTop = true;
    }
  });

});
