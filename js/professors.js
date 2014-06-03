var professors=[{
  "ID": 1,
  "Name": "Ketan Meyer-Patel",
  "Bio": "Sample Bio"
},
{
  "ID": 2,
  "Name": "Mike Reiter",
  "Bio": "Sample Bio"
},
{
  "ID": 3,
  "Name": "Kevin Jeffay",
  "Bio": "Sample Bio"
},
];
//var fakeJSON = $.parseJSON(jsonObj);
$(document).ready(function(){
    //console.log(getParameterByName("id", "http://www.cs.unc.edu/Professors/comp426-f13/snydere/cs4us/questionDetail.html?id=1"))
    console.log(professors);
    var i=0;
    var html="";
    html="";
    for (i=0;i<professors.length;i++) {
      html+="<div class='professor' id='professor'"+professors[i].ID+"'>";
      html+="<h3><a href='professorDetail.html?id="+professors[i].ID+"'>" + professors[i].Name+"</a></h3>";
      html+="</div>";
    }
    $('#professors').html(html);
});