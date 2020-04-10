function calculator()
        {
            var ParticipationGrade =parseFloat(document.getElementById('participation').value*0.10);
            var HomeworkGrade=parseFloat(document.getElementById('hw').value*0.1);
            var QuizGrade=parseFloat(document.getElementById('quiz').value*0.1);
            var M1Grade=parseFloat(document.getElementById('pm1').value*0.35);
            var M2Grade=parseFloat(document.getElementById('pm2').value*0.35);
            var CurrentGrade= ParticipationGrade+HomeworkGrade+QuizGrade+M1Grade+M2Grade;

            var display=document.getElementById('outputGrade');
            display.innerHTML='Your Current Grade Is ' + CurrentGrade;
        }

        

