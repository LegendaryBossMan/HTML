var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope)
{
  $scope.fName = "";
  $scope.lName = "";
  $scope.fColor = "";
  $scope.sColor ="";
});
function colors()
{
  /* Names*/
  document.getElementById('color2').style.backgroundColor = document.getElementById('color').value;
  document.getElementById('color2').style.color = document.getElementById('color1').value;
  document.getElementById('color3').style.color = document.getElementById('color').value;
  document.getElementById('color3').style.backgroundColor = document.getElementById('color1').value;
  document.getElementById('b1').style.backgroundColor = document.getElementById('color1').value;
  document.getElementById('b2').style.backgroundColor = document.getElementById('color').value;
  document.getElementById('b1').style.color = document.getElementById('color').value;
  document.getElementById('b2').style.color = document.getElementById('color1').value;
//Colors
  document.getElementById('b3').style.backgroundColor = document.getElementById('color').value;
  document.getElementById('b3').style.color = document.getElementById('color1').value;
  document.getElementById('b4').style.color = document.getElementById('color').value;
  document.getElementById('b4').style.backgroundColor = document.getElementById('color1').value;
  document.getElementById('color4').style.backgroundColor = document.getElementById('color1').value;
  document.getElementById('color5').style.backgroundColor = document.getElementById('color').value;
  document.getElementById('color4').style.color = document.getElementById('color').value;
  document.getElementById('color5').style.color = document.getElementById('color1').value;

}
