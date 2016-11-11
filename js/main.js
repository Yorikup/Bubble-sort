var snap = Snap("#svg"),
   numbersArray = new Array(),
   numberedBubblesArray = new Array(),
   numberedBubblesCoordsArray = new Array();
   

$('document').ready(function() {
   prepareData();
});

$('#sortButton').click(function () {
  sortarray();
  $('#sortButton').val('Сортирую...');
  $('#sortButton').attr('disabled', 'true');
});

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

var passCount = 9,
   currentNumber = 0,
   tmpNumber,
   tmpBubbleElement,
   tmpBubbleCoord;

//Рекурсивная функция, сортирующая массив. 
function sortarray() {
   /*Если соседние элементы массива стоят в неправильном порядке - сначала вызывается функция, меняющая соответствующие пузырьки на экране местами.
   Затем пока проигрывается анимация - соответствующие элементы меняются в исходном массиве, так же вносим правки в массив с пузырьками и координатами.*/
   if (numbersArray[currentNumber] > numbersArray[currentNumber+1]) {
      moveBubble(currentNumber);
      
      tmpNumber = numbersArray[currentNumber];
      numbersArray[currentNumber] = numbersArray[currentNumber+1];
      numbersArray[currentNumber+1] = tmpNumber;

      tmpBubble = numberedBubblesArray[currentNumber];
      numberedBubblesArray[currentNumber] = numberedBubblesArray[currentNumber+1];
      numberedBubblesArray[currentNumber+1] = tmpBubble;

      tmpBubbleCoord = numberedBubblesCoordsArray[currentNumber];
      numberedBubblesCoordsArray[currentNumber] = numberedBubblesCoordsArray[currentNumber+1];
      numberedBubblesCoordsArray[currentNumber+1] = tmpBubbleCoord; 

      /*Если мы ещё не выполнили необходимое число проходов или на данном проходе у нас ещё остались необработанные элементы -
      снова вызываем функцию, но с задержкой, давая время анимации.*/
      if(passCount > 0) {
         if(currentNumber < 9){
            currentNumber++;
         } else {
            currentNumber = 0;
            passCount--;
         };
         setTimeout(function() { sortarray(); }, 1000);
      };        
   } else {
      /*Иначе, если текущие 2 элемента стоят в правильном порядке, но мы не выполнили необходимое количество проходов или
      на данном проходе у нас остались необработанные элементы - мы снова вызываем функцию, но без задержки под анимацию.*/
      if(passCount > 0) {
         if(currentNumber < 9){
         currentNumber++;
         } else {
            currentNumber = 0;
            passCount--;
         };
         sortarray();
      } else {
         //Оповещаем пользователя об окончании сортировки.
         $('#sortButton').val('Массив отсортирован!');
      };
   };   
};