console.log("MATH!!");

var display = document.querySelector("#display");
  // selects display input field and sets it to variable input
var buttons = document.querySelectorAll('.num');
console.log(buttons);
  let values = [];
  for (i=0; i<buttons.length; i++){
    // values.push(buttons[i].innerHTML);
    // console.log(values);
    buttons[i].addEventListener('click', function(){
      display.innerHTML += event.target.value;
      values.push(event.target.value);
    });
  }

  var equals = document.querySelector('#equals');
  equals.addEventListener('click', function(){
    console.log(eval(values.join("")));
    display.innerHTML=(eval(values.join("")));
  })

  var clear = document.querySelector('#clear');
  clear.addEventListener('click', function(){
    values = [];
    display.innerHTML= " ";
    console.log(values);
  })
