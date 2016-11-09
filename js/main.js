//$('#myLink').click();
//sortButton.onclick = function() {
$('#sortButton').click(sortarray);

function sortarray() {
   var arr = new Array();
   var numberedBubbles = new Array();
   var count = 10;
   var x = 70;
   var tx = 49;
   var div1=document.getElementById('sorted').innerHTML = '';
               
   //Генерируем массив целых чисел от 0 до 100 и выводим его
   for (i = 0; i <count; i++)
      arr[i] = Math.floor(Math.random()*(100 - 0 + 1)) + 0;
   
   for(i=0; i<arr.length; i++) {
      bubble = s.circle(x, 100, 30);
      bubble.attr({
        fill: 'lightblue',
        stroke: 'white',
        strokeWidth: 5
      });

      var bubbletext = arr[i].toString();

      var number = s.text(tx, 110, bubbletext);
      number.attr({
         fill: 'white',
         "font-size": "26px"
      });

      numberedBubbles[i] = s.g(bubble, number);
      x += 100;
      tx += 100;
   }
               
   //Сортируем массив методом пузырька снова выводим его
   /*for (var i = 0; i < count; i++)
      for (var j = 0; j < count-i; j++)
         if (arr[j]> arr[j+1]) {
            setTimeout(move(numberedBubbles, j), 1000);
            var max = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = max;
         }*/
   function sort(i=0, j=0){
      if (arr[j]> arr[j+1]) {
         var max = arr[j];
         arr[j] = arr[j+1];
         arr[j+1] = max;
         move(numberedBubbles, j)
      };
      setTimeout(function(){sort(i+1, j);}, 1000);
   };
   sort();   
   div1=document.getElementById('sorted');
   var table1="<table><tr>";
   for(i=0; i<arr.length; i++) {
      table1+='<td>'+arr[i]+'</td>';
   }
   table1+='</tr></table>'
   div1.innerHTML+=table1;

};

var s = Snap("#svg");

function move(numberedBubbles, j, current, next){
   numberedBubbles[j].animate({transform:'translate(100, 0)'}, 700, mina.linear);
   numberedBubbles[j+1].animate({transform:'translate(-100, 0)'}, 700, mina.linear);
};

/*
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

var bubble2 = s.circle(280, 150, 50);
bubble2.attr({
  fill: 'lightblue',
  stroke: 'white',
  strokeWidth: 10
});

var number2 = s.text(268, 160, "2");
number2.attr({
   fill: 'white',
   "font-size": "40px"
});

var numberedBubble2 = s.g(bubble2, number2);

//function move(){
   //numberedBubble.animate({cx:150, cy:150}, 200, function(){
      //numberedBubble.animate({cx:250, cy:150}, 200);
   //});
//};

function move(){
   numberedBubble.animate({transform:'translate(130, 0)'}, 700, mina.linear);
   numberedBubble2.animate({transform:'translate(-130, 0)'}, 700, mina.linear);
};

//setInterval(move, 3000);*/