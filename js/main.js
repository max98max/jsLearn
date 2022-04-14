'use strict';

const arrow = document.querySelector('.arrow');
const menuList = document.querySelector('.menu__list');
const btn = document.querySelector('.button');

let sum = 0;

arrow.addEventListener('touch', function(){
   sum++;
   console.log(sum);
   if(sum % 2 == 0){
      arrow.classList.remove('active2');
   }else{
      arrow.classList.add('active2');
   }
});

console.log(arrow);

