var snap = Snap("#svg"),
   numbersArray = new Array(),
   numberedBubblesArray = new Array(),
   numberedBubblesCoordsArray = new Array();
   

$('document').ready(function() {
   prepareData();
});

//$('#sortButton').click(sortarray);

//Функция, которая отрисовывает на экране пузырьки с числами при загрузке страницы.
function prepareData() {
   var numbersCount = 10,      
      bubble,
      bubbleNumber,
      bubbleText,
      bubblePosition = 70,
      numberPosition = 47;
      
   //Получаем массив из 10 случайных чисел от 0 до 100.
   for (i = 0; i <numbersCount; i++) {
      numbersArray[i] = Math.floor(Math.random()*(100 - 0 + 1)) + 0;
   };

   //Отрисовываем 10 кругов, заносим их в массив, заносим в массив данные о их координатах.
   for (i=0; i<numbersArray.length; i++) {

      bubble = snap.circle(bubblePosition, 100, 30);
      bubble.attr({
         fill: 'lightblue',
         stroke: 'white',
         strokeWidth: 5
      });

      bubbleText = numbersArray[i].toString();

      bubbleNumber = snap.text(numberPosition, 110, bubbleText);
      bubbleNumber.attr({
         fill: 'white',
         "font-size": "26px"
      });

      numberedBubblesArray[i] = snap.g(bubble, bubbleNumber);
      numberedBubblesCoordsArray[i] = 0;
      bubblePosition += 100;
      numberPosition += 100;

   };

};

//Функция, осуществляющая перемещение пузырьков на экране. Так же вносим изменения в соответствующие массивы.
function moveBubble(currentNumber) {
   var step = 100;

   numberedBubblesCoordsArray[currentNumber] += step;
   numberedBubblesCoordsArray[currentNumber+1] -= step;

   numberedBubblesArray[currentNumber].animate({transform:'translate('+ numberedBubblesCoordsArray[currentNumber] +', 0)'}, 700, mina.linear);
   numberedBubblesArray[currentNumber+1].animate({transform:'translate('+ numberedBubblesCoordsArray[currentNumber+1] +', 0)'}, 700, mina.linear);
};

function sortarray() {
   function sort(i, j){
       if (arr[j]> arr[j+1]) {
             var max = arr[j];
             arr[j] = arr[j+1];
             arr[j+1] = max;
             move(numberedBubbles, j);
             var spareBubble = numberedBubbles.splice(j, 2);
             numberedBubbles.splice(j, 0, spareBubble[1], spareBubble[0]);         
         };
         if(i != 0)
             if(j != 9){
                  setTimeout(function(){sort(i, j+1);}, 3000);
             } else {setTimeout(function(){sort(i-1, j=0);}, 3000);
             };
    };
    var m = 9;
    var k = 0;
    sort(m, k);   
};