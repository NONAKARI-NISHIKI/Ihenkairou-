let redirectTimer;

// カルーセルが画像を切り替えたときに呼び出す関数
function handleCarouselChange() {
  // すべてのpicture, picture2, picture3, picture4を非表示にする
  document.querySelectorAll('.picture, .picture2, .picture3, .picture4').forEach(element => {
    element.style.display = 'none';
  });

  // 現在選択されているラジオボタンを取得
  const checkedRadio = document.querySelector('.carousel input[type="radio"]:checked');
  if (!checkedRadio) return;

  // 対応するpicture, picture2, picture3, picture4を表示する
  const index = Array.from(checkedRadio.parentNode.children).indexOf(checkedRadio);
  if (index % 4 === 0) {
    document.querySelector('.picture').style.display = 'block';
  } else if (index % 4 === 1) {
    document.querySelector('.picture2').style.display = 'block';
  } else if (index % 4 === 2) {
    document.querySelector('.picture3').style.display = 'block';
  } else {
    document.querySelector('.picture4').style.display = 'block';
  }

  // 他の画像が表示されたらタイマーをクリアする
  if (index % 4 !== 2) {
    clearTimeout(redirectTimer);
  }
}

// カルーセルのinput[type="radio"]にchangeイベントを追加する
document.querySelectorAll('.carousel input[type="radio"]').forEach(radio => {
  radio.addEventListener('change', handleCarouselChange);
});

// 初期表示を設定する
handleCarouselChange();
