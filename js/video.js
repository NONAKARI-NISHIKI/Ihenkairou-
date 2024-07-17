document.addEventListener("DOMContentLoaded", function() {
  var video = document.getElementById('backgroundVideo');
  video.playbackRate = 0.75; // ここで再生速度を変更します（0.5倍速）
});

function reloadPage() {
  location.reload();
}

$(document).ready(function(){
  $('.slider').bxSlider({
    mode: 'horizontal',
    auto: true,
    pause: 5000,
    controls: true,
    pager: false,
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 10
  });
});
