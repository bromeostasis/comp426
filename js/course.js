function getParameterByName( name,href )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( href );
  if( results == null )
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}
var course={
  "ID": 1,
  "Name": "COMP 550: Algorithms and analysis",
  "Description": "Learn about algorithms AND analysis of them!"
};
var questions=[{
            "ID": 1,
            "Question_Text": "Whaaaa?",
            "Course": {
                  "ID": 1,
                  "Name": "COMP 426",
                  "Description": "Silly Class"
              },
              "User":{
                  "ID": 1,
                  "Display_Name": "Evan"
              },
              "Semester": "Fall 2013",
              "Professor": "KMP"
            },
            {
            "ID": 2,
            "Question_Text": "How to things?",
            "Course": {
                  "ID": 2,
                  "Name": "COMP 535",
                  "Description": "Security"
              },
              "User":{
                  "ID": 1,
                  "Display_Name": "Evan"
              },
              "Semester": "Fall 2013",
              "Professor": "Mike Reiter"
            }];
//var fakeJSON = $.parseJSON(course);
$(document).ready(function(){
    console.log(getParameterByName("id", "http://www.cs.unc.edu/Courses/comp426-f13/snydere/cs4us/questionDetail.html?id=1"))
    console.log(course);
    console.log(questions);
    var i=0;
    var html="";
    html+="<h2>"+course.Name+"</h2>";
    html+="<br/>Brief description of the course: "+course.Description;       
    html+=".";
        
    $('#course').html(html);
    html="";
    for (i=0;i<questions.length;i++) {
      html+="<div class='question' id='question"+questions[i].ID+"'><a href='questionDetail.html?id="+questions[i].ID+"'>"+questions[i].Question_Text+"</a>";
        html+="<br/>Asked by "+questions[i].User.Display_Name;
        html+="<br/>In " ;
        //CHange conditionals to existence of professor, course, and semester. Will be slightly more complicated.
        if (true) {
            html+= questions[i].Professor + "'s ";
        }
        if(true){
            html+= questions[i].Course.Name + " course";
        }
        if (true) {
            html+= " during " +questions[i].Semester;
        }
        
        
        html+=".</div>";
    }
    $('#questionList').html(html);
});