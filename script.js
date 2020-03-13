'use strict';

{
  // id('roll')を取得する
  const roll = document.getElementById('roll');
  const dice = document.getElementById("dice");

  //clickしたときに次の処理をするclickイベント
  roll.addEventListener('click', () => {
    randomNumber();
  });

  function randomNumber() {
    // Math.foolerを使用して、小数点以下を削除して1-6までの正数のランダムに表示
    const min = 1;
    const max = 6;
    const num = min + Math.floor(Math.random() * (max + 1 - min));

    // "dice"に乱数を出力
    dice.textContent = num;

    // 数値が1と6のときのスタイルが変更する条件式
    if (num === 1 || num === 6) {
      dice.classList.add("numberOneOrSix");
    } else {
      dice.classList.remove("numberOneOrSix");
    }
  }
}
