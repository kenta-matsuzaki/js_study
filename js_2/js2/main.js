'use strict';

{
// 配列 ---------------------------
  // const scores = [80, 90, 40];
  // console.log(scores);

  // scores[2] = 100;

  // console.log(scores);
  // console.log(scores.length);


// オブジェクト
  // const player = {
  //   name: 'matsuzaki', // プロパティ　名前(キー)と値で構成される
  //   score: 99,
  // };
  
  // console.log(player);
  // console.log(player.name);
  // console.log(player['name']);

  // player.score = 100;
  // console.log(player);

  // player.email = 'kenta.com';
  // console.log(player);

  // delete player.score; // 要素を削除する
  // console.log(player);


// クラス ---------------------------
  class Player { // 親クラス
    constructor(name, score) { // メソッド
      this.name = name;
      this.score = score;
    }

    showInfo() {
      console.log(`name: ${this.name}, score: ${this.score}`);
    }

    static showVersion() {
      console.log('player class ver 1.0');
    }
  }

  class SoccerPlayer extends Player { //extendsでクラスの継承ができる
    constructor(name, score, number) {
      super(name, score); // superで親クラスのconstructorを呼ぶことができる
      this.number = number;
    }
    kick() {
      console.log('Gooooaaal!');
    }
  }

  const matsuzaki = new Player('tmatsuzaki', 65); // インスタンス化
  const bunji = new Player('bunji', 90);

  console.log(matsuzaki);
  console.log(bunji.name);

  bunji.showInfo();
  matsuzaki.showInfo();

  Player.showVersion();

  const tsubasa = new SoccerPlayer('tsubasa', 99, 10);

  tsubasa.kick();
  console.log(tsubasa.number);
  tsubasa.showInfo();

// 配列の要素を操作 ---------------------------
  const a = [1, 5, 10];

  a.unshift(100); // 先頭に100を追加
  a.push(200, 300) // 末尾に200と300を追加
  console.log(a);

  a.shift(); //先頭の要素を削除
  a.pop(); // 末尾の要素を削除
  console.log(a);

  a.splice(2, 0, 6, 7); //第一引数に指定したインデックスの前を変更、第二引数は削除する場合に指定
  console.log(a);

  const removed = a.splice(1, 2); // 第一引数に指定したインデックスから2つ削除
  console.log(a);
  console.log(removed);


//forEach ---------------------------
  const f = [1, 5, 10, 100];
  for(let i = 0; i < f.length; i++) {
    console.log(f[i]);
  }

  f.forEach((item, index) => {
    console.log(`${index}:${item}`);
  });

// map,filter ---------------------------
  const m = [1, 2, 5, 10];

  const b = [];
  m.forEach(item => {
    b.push(item * 2);
  });
  console.log(b);

  // const c = m.map(item => {
  //   return item * 2;
  // });
  const c = m.map(item => item * 2);
  console.log(c);

  const d = a.filter(item => item % 2 === 0);
  console.log(d); // filterは真偽値がtrueのものだけを返してくれる

// オブジェクトを操作 ---------------------------
  const o = {
    a: 1,
    b: 2,
  };

  console.log(Object.keys(o));
  console.log(Object.values(o));
  console.log(Object.entries(o)); // entriesは全体を配列で取ってきてくれる

  Object.keys(o).forEach(key => {
    console.log(`${key}: ${o[key]}`);
  });

// スプレッド演算子 ---------------------------
  const g = [10, 20];
  const h = [1, 2, ...g]; // ...がスプレッド演算子 スプレッド演算子は参照ではない
  console.log(h);

  const j = [10, 20]; 
  const sum = (a, b) => a + b;
  console.log(sum(...j));

  const o1 = {a: 1};
  const o2 = {...o1, b: 2};
  console.log(o2);


// 分割代入 ---------------------------
  const numbers = [1, 2];
  // const num1 = numbers[0];
  // const num2 = numbers[1];
  const [num1, num2] = numbers;
  console.log(num1);
  console.log(num2);

  const numbers1 = [1, 2, 3, 8];
  const [num3, num4, ...rest] = numbers1;
  console.log(num3);
  console.log(num4);
  console.log(rest);

  const player1 = {
    name: 'kenta',
    score: 10245,
    hp: 999,
    mp: 555,
  };
  const {name, score, ...points} = player1;
  console.log(name);
  console.log(score);
  console.log(points);


// 文字列の操作 ---------------------------
  const str = 'hello';

  console.log(str.length);
  console.log(str.substring(1, 3)); // substring 第一引数の番目と第二引数の前の番目を選択する。
  console.log(str[1]);


// Mathオブジェクト ---------------------------
  console.log(Math.PI); // 円周率を出してくれる
  
  console.log(Math.random()); // 0以上1未満のランダムな数値を生成するメソッド

  // Math.random() -> 0...0.999999
  // Math.random() * 6 -> 0...5.9999999
  // Math.floor(Math.random() * 6 + 1) -> 1...6

  console.log(Math.floor(Math.random() * 6 + 1)); //Math.floor 小数点を切り捨てる


// Dateオブジェクト ---------------------------
  const day = new Date();
  console.log(day);

  console.log(day.getFullYear());
  console.log(day.getMonth()); // 0 -> 1月 で始まり、0から11で表現する
  console.log(day.getDate());
  console.log(day.getDay()); // 0 -> 日曜日 で始まり、0-6で表現される
  console.log(day.getHours());
  console.log(day.getMinutes());
  console.log(day.getSeconds());
  console.log(day.getMilliseconds());

  console.log(day.getTime()); // UTC(協定世界時)の1970年1月1日00時00分00秒からの経過ミリ秒を返してくれる

  const day1 = new Date(2019, 8);
  day1.setHours(14, 23, 30); // 時間、分、秒を設定できる

  console.log(day1);

  const day3 = new Date(2019, 8, 27);
  const day4 = new Date(2019, 8, 28);
  console.log((day4 - day3) / (24 * 60 * 60 * 1000)); // 　日単位での計算結果になる


// windowオブジェクト ---------------------------
  // window.alert('hello');
  // alert('hey'); // windowは省略できる

  // const answer = confirm('are you sure?');
  // console.log(answer); // okならtrue キャンセルならfalse が返ってくる


// setInterval ---------------------------
  // let i = 0; //カウンター用の変数

  // const showTime = () => {
  //   console.log(new Date());
  //   i++;
  //   if(i === 3) {
  //     clearInterval(timerId);
  //   }
  // };

  // let timerId = setInterval(showTime, 1000); // showTimeに()をつけないことに注意!


// setTimeout 指定した時間の後に1回だけ処理を実行するためのメソッド ---------------------
  // let i = 0;
  // const showTime1 = () => {
  //   console.log(new Date());
  //   let timerId = setTimeout(showTime1, 1000); // setTimeoutで繰り返し処理をすることもできる
  //   i++;
  //   if (i > 2) {
  //     clearTimeout(timerId);
  //   }
  // };

  // showTime1();

  // setIntervalは一定時間ごとに処理を実行する命令
  // setTimeoutはあくまでも一定時間後に処理を実行する命令
  // システムに負荷をかけずに繰り返し処理を行いたい場合はsetTimeout()もよく使われる


// 例外処理
  const hello = 'hello';
  console.log(hello.toUpperCase());
  console.log('finish!');

  const int = 999;
  try {
    console.log(int.toUpperCase());
  } catch (e) {
    console.log(e.message);
  }

}