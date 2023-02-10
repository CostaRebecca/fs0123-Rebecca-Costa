
function interazione(element){
    let simbolo = element.getAttribute('data-calc')

     let display = document.querySelector('#display');
     display.value += simbolo;
    
 }

 function totale(){
     let display = document.querySelector('#display');

     display.value = eval(display.value);
 }

