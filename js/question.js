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
var jsonObj={
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
            };
var comments=[{
  "ID": 1,
  "Question_ID": 1,
  "User":{
    "ID": 2,
    "Display_Name": "Jeremy"
  },
  "Text": "Yeah, I know right?!"
},
{
  "ID": 6,
  "Question_ID": 1,
  "User":{
    "ID": 3,
    "Display_Name": "Ben"
  },
  "Text": "I couldn't believe it!"
}
];
//var fakeJSON = $.parseJSON(jsonObj);
$(document).ready(function(){
    console.log(getParameterByName("id", "http://www.cs.unc.edu/Courses/comp426-f13/snydere/cs4us/questionDetail.html?id=1"))
    console.log(jsonObj);
    console.log(comments);
    var i=0;
    var html="";
    html+="<h2>"+jsonObj.Question_Text+"</h2>";
    html+="<br/>Asked by "+jsonObj.User.Display_Name;
    html+="<br/>In " ;
    //CHange conditionals to existence of professor, course, and semester. Will be slightly more complicated.
    if (true) {
        html+= jsonObj.Professor + "'s ";
    }
    if(true){
        html+= jsonObj.Course.Name + " course";
    }
    if (true) {
        html+= " during " +jsonObj.Semester;
    }
        
        
    html+=".";
        
    $('#question').html(html);
    html="";
    for (i=0;i<comments.length;i++) {
      html+="<div class='comment' id='comment'"+comments[i].ID+"'>";
      html+="Comment by " + comments[i].User.Display_Name;
      html+="<br/>"+comments[i].Text;
      html+="</div>";
    }
    $('#comments').html(html);
});