<!DOCTYPE html>
<html>
<body>

<iframe id="myframe" src="/default.asp" height="200" width="250">
<p>Your browser does not support iframes.</p>
</iframe>

<p>Click the button to display the height of the iframe.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var x = document.getElementById("myframe").height;
  document.getElementById("demo").innerHTML = x;
}
</script>

</body>
</html>
