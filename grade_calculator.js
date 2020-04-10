#This code is not working properly. If it isn't difficult could you explain why during the class.

function CalculateGrade(){
  

  var ParticipationPercent = parseInt(document.getElementById("participationPercent").innerHTML);
  var HomeworkPercent = parseInt(document.getElementById("hwPercent").innerHTML);
  var QuizPercent = parseInt(document.getElementById("quizPercent").innerHTML);
  var M1Percent = parseInt(document.getElementById("pm1Percent").innerHTML);
  var M2Percent = parseInt(document.getElementById("pm2Percent").innerHTML);

  
  var MyParticipationPercent = parseFloat(document.getElementById("ParticipationGrade").value);
  var MyHWPercent = parseFloat(document.getElementById("HomeworkGrade").value);
  var MyQuizPercent = parseFloat(document.getElementById("QuizGrade").value);
  var MyM1Percent = parseFloat(document.getElementById("M1Grade").value);
  var MyM2Percent = parseFloat(document.getElementById("M2Grade").value);

  var CurrentGrade = (MyParticipationPercent/100)*ParticipationPercent + (MyHWPercent/100)*HomeworkPercent + (MyQuizPercent/100)*QuizPercent + (MyM1Percent/100)*M1Percent + (MyM2Percent*100)/M2Percent

console.log(CurrentGrade)
document.getElementById("CurrentGrade").innerHTML = CurrentGrade;

}
