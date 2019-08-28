'use strict';

{
// Document Object Model / DOM

    // querySelectorAllはNodeListと呼ばれる配列と似たようなデータ構造になる
    // nth-child(odd)で奇数番目だけを書き換えることができる

    const div = document.querySelector('div');
    
    div.className = 'box border-pink';
}