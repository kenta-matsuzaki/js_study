'use strict';

{
// 配列
  // const scores = [80, 90, 40];
  // console.log(scores);

  // scores[2] = 100;

  // console.log(scores);
  // console.log(scores.length);


// オブジェクト
  const player = {
    name: 'matsuzaki', // プロパティ　名前(キー)と値で構成される
    score: 99,
  };
  
  console.log(player);
  console.log(player.name);
  console.log(player['name']);

  player.score = 100;
  console.log(player);

  player.email = 'kenta.com';
  console.log(player);

  delete player.score; // 要素を削除する
  console.log(player);

}