var screen = document.getElementById('screen');

function noClick(value)
{
  screen.value += value;
}
function clearScreen()
{
  screen.value = "";
}
function showAns() 
{
  var result = eval(screen.value);
  screen.value = result;
}
