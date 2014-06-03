
var intQuestions=[{
            "ID": 1,
            "Question_Text": "Whaaaa?",
            "Company": "Fidelity Investments",
            "User":{
                  "ID": 1,
                  "Display_Name": "Evan"
            },
            "Year": "2013"
            },
            {
            "ID": 2,
            "Question_Text": "How to things?",
            "Company": "GOOGLE",
              "User":{
                  "ID": 1,
                  "Display_Name": "Evan"
              },
              "Year": "Fall 2040"
            }];
//var fakeJSON = $.parseJSON(intQuestions);
$(document).ready(function(){
    console.log(intQuestions);
    var i=0;
    var html="";
    intQuestions=[];
    $.ajax({
       url:'server-side/interview_questions.php',
       dataType:'json',
       async:false,
       success:function(data, textStatus, jqXHR){
            consol.log(data);
            for (i=0;i<data.length;i++) {
                        var question = $.parseJSON(data[i]);
                        question.user = $.parseJSON(question.user);
                        intQuestions[i]=question;
            }
       }
    });
    
    for (i=0; i<intQuestions.length; i++) {
        html+="<div class='question' id='question"+intQuestions[i].id+"'><h3><a href='intQuestionDetail.html?id="+intQuestions[i].id+"'>"+intQuestions[i].text+"</a></h3>";
        html+="<br/>Asked by "+intQuestions[i].user.display_name;
        html+="<br/>For " ;
        //CHange conditionals to existence of professor, course, and semester. Will be slightly more complicated.
        if (true) {
            html+= intQuestions[i].company;
        }
        if (true) {
            html+= " in " +intQuestions[i].year;
        }
        
        
        html+=".</div>";
        
    }
    $('#questions').html(html);
});