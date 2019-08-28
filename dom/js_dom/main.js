'use strict';

{
// Document Object Model / DOM

  document.querySelector('h1').textContent = 'H1!';
  document.querySelectorAll('li:nth-child(odd)').forEach(li => { 
    // querySelectorAllはNodeListと呼ばれる配列と似たようなデータ構造になる
    // nth-child(odd)で奇数番目だけを書き換えている
    li.textContent = 'li!';
  });
  
}