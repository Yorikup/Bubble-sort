sortButton.onclick = function() {
   var arr = new Array();
   var count = 10;
   var div=document.getElementById('sort').innerHTML = '';
   var div1=document.getElementById('sorted').innerHTML = '';
               
   //Генерируем массив целых чисел от 0 до 100 и выводим его
   for (i = 0; i <count; i++)
      arr[i] = Math.floor(Math.random()*(100 - 0 + 1)) + 0;
   div=document.getElementById('sort');
   var table="<table><tr>";
   for(i=0; i<arr.length; i++) {
      table+='<td>'+arr[i]+'</td>';
   }
   table+='</tr></table>'
   div.innerHTML+=table;
               
   //Сортируем массив методом пузырька снова выводим его
   for (var i = 0; i < count; i++)
      for (var j = 0; j < count-i; j++)
         if (arr[j]> arr[j+1]) {
            var max = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = max;
         }   
   div1=document.getElementById('sorted');
   var table1="<table><tr>";
   for(i=0; i<arr.length; i++) {
      table1+='<td>'+arr[i]+'</td>';
   }
   table1+='</tr></table>'
   div1.innerHTML+=table1;
};

var s = Snap("#svg");

var bubble = s.circle(150, 150, 50);
bubble.attr({
  fill: 'lightblue',
  stroke: 'white',
  strokeWidth: 10
});

var number = s.text(138, 160, "1");
number.attr({
   fill: 'white',
   "font-size": "40px"
});

var numberedBubble = s.g(bubble, number);
numberedBubble

//function move(){
   //numberedBubble.animate({cx:150, cy:150}, 200, function(){
      //numberedBubble.animate({cx:250, cy:150}, 200);
   //});
//};

function move(){
   numberedBubble.animate({transform:'translate(100, 0)'}, 700, mina.linear);
};

setInterval(move, 3000);