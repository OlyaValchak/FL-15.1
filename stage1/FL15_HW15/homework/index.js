/* START TASK 1: Your code goes here */
function MakeBlue(element){
  element.parentElement.style='background-color: blue;'
}
function MakeYellow(element){
    element.style='background-color: yellow;'
}
function MakeGreen(element){
    element.parentElement.parentElement.style='background-color:green;'
}
/* END TASK 1 */

/* START TASK 2: Your code goes here */
let validation =document.getElementsByClassName('validation');
function pressHandler(e){
    let rel =/^\+380\d{9}$/;
    if (e.value.test(rel)) {
        e.className = "red";
       let node = document.createTextNode('Data was successfuly sent');
       document.getElementById('validation').appendChild(node);
     } else {
         console.log('smth');
     }
}
/* END TASK 2 */

/* START TASK 3: Your code goes here */

/* END TASK 3 */
