function checkGrade(evt) {
  var grade =parseFloat(evt.currentTarget.value);

  if (grade > 100 || grade < 0) {
    console.log("Wrong value")
    evt.currentTarget.style.color = "red"
  } else {
    console.log("Correct Value")
    evt.currentTarget.style.color = "black"

  }

}

function GradeCalculator()
        {
            var ParticipationPercent =parseInt(document.getElementById('ParticipationPercent').innerHTML);
            var HomeworkPercent=parseInt(document.getElementById('HWPercent').innerHTML);
            var QuizPercent=parseInt(document.getElementById('QuizPercent').innerHTML);
            var M1Percent=parseInt(document.getElementById("PM1Percent").innerHTML);
            var M2Percent=parseInt(document.getElementById('PM2Percent').innerHTML);


            var ParticipationGrade =parseFloat(document.getElementById('MyParticipation').value);
            var HWGrade =parseFloat(document.getElementById('MyHW').value);
            var QuizGrade =parseFloat(document.getElementById('MyQuiz').value);
            var PM1Grade =parseFloat(document.getElementById('MyPm1').value);
            var PM2Grade =parseFloat(document.getElementById('MyPm2').value);

            if (ParticipationGrade > 100) {alert("Your partcipation should be a grade from 0 to 100")
            }
            if (HWGrade > 100) {alert("Your homework should be a grade from 0 to 100")
            }
            if (QuizGrade > 100) {alert("Your quiz should be a grade from 0 to 100")
            }
            if(PM1Grade > 100) {alert("Your Project Milestone 1 should be a grade from 0 to 100")
            }
            if (PM2Grade > 100) {alert("Your Project Milestone 1 should be a grade from 0 to 100")
            }
            


            var Current_Grade = ParticipationPercent*ParticipationGrade/100 + HomeworkPercent*HWGrade/100 + QuizPercent*QuizGrade/100 + M1Percent*PM1Grade/100 + M2Percent*PM2Grade/100

            var display=document.getElementById('outputGrade');
            display.innerHTML=' Current Grade: ' + Current_Grade;
        }

function LetterGrade() {
      var ParticipationPercent =parseInt(document.getElementById('ParticipationPercent').innerHTML);
            var HomeworkPercent=parseInt(document.getElementById('HWPercent').innerHTML);
            var QuizPercent=parseInt(document.getElementById('QuizPercent').innerHTML);
            var M1Percent=parseInt(document.getElementById("PM1Percent").innerHTML);
            var M2Percent=parseInt(document.getElementById('PM2Percent').innerHTML);


            var ParticipationGrade =parseFloat(document.getElementById('MyParticipation').value);
            var HWGrade =parseFloat(document.getElementById('MyHW').value);
            var QuizGrade =parseFloat(document.getElementById('MyQuiz').value);
            var PM1Grade =parseFloat(document.getElementById('MyPm1').value);
            var PM2Grade =parseFloat(document.getElementById('MyPm2').value);


            var Current_Grade = ParticipationPercent*ParticipationGrade/100 + HomeworkPercent*HWGrade/100 + QuizPercent*QuizGrade/100 + M1Percent*PM1Grade/100 + M2Percent*PM2Grade/100
      
      
      if (Current_Grade <= 100 && Current_Grade >=90) {letter_grade = "A"}

      if (Current_Grade < 90 && Current_Grade >=80) {letter_grade = "B"}

      if (Current_Grade < 80 && Current_Grade >=70) {letter_grade = "C"}

      if (Current_Grade < 70  && Current_Grade>=60 ){letter_grade = "D"}
      
      if (Current_Grade < 60) {letter_grade = "F"}

      var display=document.getElementById('LetterGrade');
            display.innerHTML=' Current Letter Grade: ' + letter_grade;
      
      }
