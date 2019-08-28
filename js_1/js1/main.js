'use strict';

console.log('hello world!!!');
console.log('helloooooooo');
console.log('hey');
console.log('it\'s mine')
console.log("'hey'hey")
console.log('hell\no wor\tld')

console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);
console.log(10 ** 3);

// 定数と変数
let price = 150;

console.log(price * 140);
console.log(price * 160);

price = 170;

console.log(price * 140);
console.log(price * 160);

price = 500

price = price + 100;
price += 100; //同上

price *= 2 // price = price * 2

price--; // price -= 1
price++; //price += 1

console.log(price);

// データ型
console.log(typeof 'hello');
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

console.log(parseInt('5', 10) + 3); // parseInt 引数の文字列を指定した進数の整数値に変換

// if条件分岐
const score = 60;
// if (score >= 80) {
//   console.log('Great!');
// } else if (score >= 60) {
//   console.log('Good');
// } else {
//   console.log('OK...!');
// }

score >= 80? console.log('Great!') : console.log('OK...!') //短縮できるがあまり使わない

// 論理演算子
// && なおかつ
// || もしくは
// ! 〜ではない
const name = 'matsuzaki';

if (score >= 50) {
  if (name === 'matsuzaki') {
    console.log('Good job!');
  }
}

if (score >= 50 && name === 'matsuzaki'){
  console.log('Good job!');
}

// switchの条件分岐
const signal = 'white';

switch (signal) {
  case 'red':
    console.log('stop!');
    break;
  case 'yellow':
    console.log('caution!');
    break;
  case 'blue':
  case 'green': //2つ指定できる
    console.log('go!');
    break;
  default:
    console.log('wrong signal!');
    break;
  }

  // forを使用したループ処理

  for(let i = 1; i <= 10; i++) {
    console.log(`${i}hello`);
  }

  // whileを使用したループ処理
  let hp = 200;
  
  while (hp > 0) {
    console.log(`${hp} HP left!`);
    hp -= 50;
  }

  // for (let hp = 200; hp > 0; hp -= 50) {
  //   console.log(`${hp} HP left!`);
  // }

  // continue,breakを使用
  for (let i = 1; i <= 10; i++) {
    if (i === 4) {
      continue; // 4がスキップされる
    } else if (i === 6) {
      break; // 6になる前にストップされる
    }
    console.log(i);
  }

  // 関数
function showAd(message = 'AD') { // 仮引数
  console.log('------------')
  console.log(`-----${message}-----`)
  console.log('------------')
}

  showAd('header ad'); // 実引数

  console.log('tom is great!')
  console.log('ken is bad!')

  showAd('footer ad');
  showAd();
  
