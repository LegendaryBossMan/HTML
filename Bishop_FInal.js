function gradeTest()
{
  var totalQuestions = 5;
  var correctAnswers = 0;
  var i;

  //First question Js
  var a1 = document.getElementById('q1').value.toLowerCase();
  if(a1 == 'bonjour')
  {
    correctAnswers++;
  }
  //Second ?
  var a2 = document.getElementById('q2').value.toLowerCase();
  if(a2 == 'oui')
  {
    correctAnswers++;
  }

  var a3 = document.getElementById('q3').value.toLowerCase();
  if(a3 == 'merci'|| a3 =='je vous remercie')
  {
    correctAnswers++;

  }
  if(a3 == 'je vous remercie')
  {
    document.getElementById('float2').style.display = "block";
  }
  var a4 = document.getElementById('q4').value.toLowerCase();
  if(a4 == 'bonne nuit')
  {
    correctAnswers++;
  }
  var a5 = document.getElementById('q5').value.toLowerCase();
  if(a5 == 'monsieur')
  {
    correctAnswers++;
  }

//Correct Answers
  if(correctAnswers == totalQuestions)
  {
    alertText = "All the answers are correct.";

  }
  else
    {
      alertText = "You got " + correctAnswers + " out of " +totalQuestions+ " Correct!";
    }
    alert(alertText);
  }
