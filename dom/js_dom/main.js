'use strict';

{
// Document Object Model / DOM

    // querySelectorAllはNodeListと呼ばれる配列と似たようなデータ構造になる
    // nth-child(odd)で奇数番目だけを書き換えることができる

  const h1 = document.querySelector('h1');

  console.log(h1.title);
  h1.title = 'changed';

  h1.style.color = 'red';
  h1.style.backgroundColor = 'black';

    
}