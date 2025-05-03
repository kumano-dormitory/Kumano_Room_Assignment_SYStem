// ボタンクリック時の処理を定義

// ブロック名一覧
const blockNames = ["A1", "A2", "A3", "A4", "B12", "B3", "B4", "C12", "C34"];

// リセット処理
function resetAll() {
  // 巡目を1に戻す
  document.getElementById("roundCount").textContent = "1";
        // 入力フォームや表示も初期化（必要に応じて書き換え）
        document.getElementById('blocksArea').innerHTML = "";

  // 各ブロックの指名入力を初期化
  blockNames.forEach(name => {
    const blockDiv = document.getElementById(`block_${name}`);
    if (blockDiv) {
      blockDiv.innerHTML = "";  // 中身を削除

      // 入力フォームを初期状態で2個追加（必要に応じて数を調整）
      for (let i = 0; i < 2; i++) {
        const input = document.createElement("input");
        input.type = "number";
        input.placeholder = `${name}[${i}]`;
        blockDiv.appendChild(input);
      }
    }
  });
}

// 確定処理
function confirmInput() {
  blockNames.forEach(name => {
    const blockDiv = document.getElementById(`block_${name}`);
    if (blockDiv) {
      const inputs = blockDiv.querySelectorAll("input");
      inputs.forEach(input => {
        const value = input.value;
        const span = document.createElement("span");
        span.textContent = value;
        span.classList.add("confirmed-number"); // スタイル用クラス（任意）
        input.replaceWith(span);  // 入力 → 表示テキストに置き換え
      });
    }
  });

  // 巡目を +1
  const roundDisplay = document.getElementById("roundCount");
  const currentRound = parseInt(roundDisplay.textContent);
  roundDisplay.textContent = currentRound + 1;

  // 必要に応じて、確定をサーバーに送信することも可能
  /*
  fetch('/confirm', { method: 'POST' })
    .then(response => response.json())
    .then(data => console.log("確定完了:", data));
  */
}

// ボタンにイベントを割り当て
document.addEventListener("DOMContentLoaded", () => {
  const resetBtn = document.getElementById("resetBtn");
  const confirmBtn = document.getElementById("confirmBtn");

  if (resetBtn) resetBtn.addEventListener("click", resetAll);
  if (confirmBtn) confirmBtn.addEventListener("click", confirmInput);
});
