'use strict';

{
// 配列
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


// クラス
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

// 配列の要素を操作
  const a = [1, 5, 10];

  a.unshift(100); // 先頭に100を追加
  a.push(200, 300) // 末尾に200と300を追加
  console.log(a);

  a.shift(); //先頭の要素を削除
  a.pop(); // 末尾の要素を削除
  console.log(a);

}