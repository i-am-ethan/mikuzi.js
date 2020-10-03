"use strict";

{
  //クリックしたらhitを表示する

  //1.ボタンを取得する
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    // console.log("hit");
    const results = ["大吉", "中吉", "凶", "happy"];
    const n = Math.floor(Math.random() * results.length);
    btn.textContent = results[n];

    // switch (n) {
    //   case 0:
    //     btn.textContent = "大吉";
    //     break;
    //   case 1:
    //     btn.textContent = "吉";
    //     break;
    //   case 2:
    //     btn.textContent = "凶";
    //     break;
    // }
  });
}

