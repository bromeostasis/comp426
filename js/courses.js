var courses=[{
  "ID": 1,
  "Name": "COMP 550: Algorithms and analysis",
  "Description": "Learn about algorithms AND analysis of them!"
},
{
  "ID": 2,
  "Name": "COMP 426: Web programming",
  "Description": "How to www"
},
{
  "ID": 3,
  "Name": "COMP 535: Introduction to web security",
  "Description": "Keep it locked down."
},
];
//var fakeJSON = $.parseJSON(jsonObj);
$(document).ready(function(){
    //console.log(getParameterByName("id", "http://www.cs.unc.edu/Courses/comp426-f13/snydere/cs4us/questionDetail.html?id=1"))
    console.log(courses);
    var i=0;
    var html="";
    html="";
    for (i=0;i<courses.length;i++) {
      html+="<div class='course' id='course'"+courses[i].ID+"'>";
      html+="<h3><a href='courseDetail.html?id="+courses[i].ID+"'>" + courses[i].Name+"</a></h3>";
      html+="</div>";
    }
    $('#courses').html(html);
});