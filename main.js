// 残り時間 = 終了時刻 - 現在時刻
function check() {
  let countdown = endTime - new Date().getTime();

  // ③タイマーの終了
  if (countdown < 0) {
    clearInterval(intervalId);
    countdown = 0;
    pText.textContent = 'セールは終了しました';
  }

  const totalSeconds = Math.floor(countdown / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const minutesFormatted = String(minutes).padStart('2', 0);
  const secondsFormatted = String(seconds).padStart('2', 0);

  let displayText;

  if (hours > 0) {
    const hoursFormatted = String(hours).padStart('2', 0);
    displayText = `${hoursFormatted}時間${minutesFormatted}分${secondsFormatted}秒`;
  } else {
    displayText = `${minutesFormatted}分${secondsFormatted}秒`
  };

  pTimer.textContent = displayText;

}



const btn = document.getElementById('btn');
const pTimer = document.getElementById('pTimer');
const pText = document.getElementById('pText');
const sailBtn = document.getElementById('sailBtn');

let intervalId;
let endTime;


// ①終了時刻を求める
btn.addEventListener('click', () => {

  if (intervalId) {
    clearInterval(intervalId);
  }

  endTime = new Date().getTime() + 60 * 60 * 1000;

  // ②残り時間を求める
  intervalId = setInterval(check, 1000);
})

// 購入ボタンを押したら外部サイトに流す
sailBtn.addEventListener('click', () => {
  window.open('https://ja.wikipedia.org/wiki/%E6%83%85%E5%A0%B1%E5%95%86%E6%9D%90', '_blank' );
})




