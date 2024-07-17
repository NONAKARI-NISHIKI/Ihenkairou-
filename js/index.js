// 5秒後にNow Loadingを非表示にする
setTimeout(function() {
  document.querySelector('.loading').style.display = 'none';
}, 5000);

function reloadPage() {
  window.location.reload();
}


