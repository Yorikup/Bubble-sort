var snap = Snap("#svg"),
   numbersArray = new Array(),
   numberedBubblesArray = new Array(),
   numberedBubblesCoordsArray = new Array()
   

$('document').ready(function () {
   prepareData();
});

//$('#sortButton').click(sortarray);

function prepareData() {
   var numbersCount = 10,      
      bubble,
      bubbleNumber,
      bubbleText,
      bubblePosition = 70,
      numberPosition = 47
      
   for (i = 0; i <numbersCount; i++) {
      numbersArray[i] = Math.floor(Math.random()*(100 - 0 + 1)) + 0;
   }

   for(i=0; i<numbersArray.length; i++) {

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

/*function sortarray() {
    var arr = new Array();
    var numberedBubbles = new Array();
    var count = 10;
    var x = 70;
    var tx = 49;
    var div=document.getElementById('sort').innerHTML = '';
    var div1=document.getElementById('sorted').innerHTML = '';
                      
    //Генерируем массив целых чисел от 0 до 100 и выводим его
    for (i = 0; i <count; i++)
         arr[i] = Math.floor(Math.random()*(100 - 0 + 1)) + 0;
    
    for(i=0; i<arr.length; i++) {
         bubble = snap.circle(x, 100, 30);
         bubble.attr({
            fill: 'lightblue',
            stroke: 'white',
            strokeWidth: 5
         });

         var bubbletext = arr[i].toString();

         var number = snap.text(tx, 110, bubbletext);
         number.attr({
             fill: 'white',
             "font-size": "26px"
         });

         numberedBubbles[i] = s.g(bubble, number);
         x += 100;
         tx += 100;
    }
    
    function sort(i, j){
         console.log(numberedBubbles);
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

function move(numberedBubbles, j){
    numberedBubbles[j].animate({transform:'translate(100, 0)'}, 700, mina.linear);
    numberedBubbles[j+1].animate({transform:'translate(-100, 0)'}, 700, mina.linear);
    console.log(j, j+1);
};*/