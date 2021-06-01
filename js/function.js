(() => {
  const $startBtn = document.getElementById('start_btn');
  const $modal = document.getElementById('modal');
  const $closeBtn = document.getElementById('close_btn');
  const $openBg = document.getElementById('open_bg');
  const $restartBtn = document.getElementById('restart__btn')

  //作動前に表示しっぱなしにする　最後に消す処理
  //$modal.classList.add('active');
  //$openBg.classList.add('active');

  $startBtn.addEventListener('click', () => {
    $modal.classList.add('active');
    $openBg.classList.add('active');
  });
  $closeBtn.addEventListener('click', () => {
    $modal.classList.remove('active');
    $openBg.classList.remove('active');
    location.reload();
  });
  $restartBtn.addEventListener('click', () => {
    location.reload();
  });
})();
