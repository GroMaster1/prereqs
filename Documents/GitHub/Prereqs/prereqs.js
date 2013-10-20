$("form").on("submit", function(event){

	event.preventDefault();
	var values = [];
	var checked = $(":checked");
	$("#oq").empty();
	$("#oq").append("Classes you are overqualified for:<br>");
	$("#good").empty();
	$("#good").append("Classes you can take:<br>");
	$("#bad").empty();
	$("#bad").append("Classes you do not have the necessary prerequisites for:<br>");
	for (var i = 0; i<checked.length; i++)
	{
		if (checked[i]=="cs125")
			values.push("cs101");
		values.push(checked[i].value);
	}

	for (var i =0; i<classes.length; i++)
	{
		makeYellow(classes[i], values);
		makeGreen(classes[i], values);
		makeRed(classes[i], values)
		if(classes[i][1])
			$("#oq").append("<br>" +classes[i][0]);
		if (classes[i][2])
			$("#good").append("<br>"+classes[i][0]);
		if(classes[i][3])
			$("#bad").append("<br>"+classes[i][0]);
	}
	
});

var rcs100 = ["CS 100", false, false, false, ["sophomre", "junior", "senior", "cs100", "cs225"], [] ];
var rcs101 = ["CS 101", false, false, false, ["cs225", "cs125"], ["math220",] ];
var rcs102 = ["CS 102", false, false, false, ["cs225", "cs102", "cs125"], [] ];
var rcs103 = ["CS 103", false, false, false, ["cs225", "cs103", "cs125"], ["cs101"] ];
var rcs105 = ["CS 105", false, false, false, ["cs225", "cs105", "cs125"], ["easyMath"] ];
var rcs125 = ["CS 125", false, false, false, ["cs225", "cs125"], ["easyMath"] ];

	//TO DO: look into why these cannot be extracted. Its weird o.0 - just a style preference though
		//var rcs125 = ["CS 125", false, false, false, rcs125oq, rcs125pr ];
		//	var rcs125oq = ["cs225", "cs125"];
		//	var rcs125pr = ["easyMath"];

var rcs173 = ["CS 173", false, false, false, ["cs173", "cs225"], ["math220", "cs101"] ];
var rcs196 = ["CS 196", false, false, false, ["sophomre", "junior", "senior"], [] ];
var rcs199 = ["CS 199", false, false, false, [], [] ];
var rcs210 = ["CS 210", false, false, false, [], ["senior", "cs225"] ];
var rcs225 = ["CS 225", false, false, false, ["cs225"], ["cs125", "cs173"] ];
var rcs231 = ["CS 231", false, false, false, ["cs231"], ["cs225"] ];
var rcs232 = ["CS 232", false, false, false, ["cs232"], ["cs231"] ];
var rcs241 = ["CS 241", false, false, false, ["cs241"], ["cs225", "cs231"] ];
var rcs242 = ["CS 242", false, false, false, ["cs242"], ["cs241"] ];
var rcs296 = ["CS 296", false, false, false, ["cs296"], ["cs225"] ];
var classes = [rcs100, rcs101, rcs102, rcs103, rcs105, rcs125, rcs173, rcs196, rcs199, 
				rcs210, rcs225, rcs231, rcs232, rcs241, rcs242, rcs296];

var makeYellow = function(array, values)
{
	
	for (var i = 0; i<array[4].length; i++)
	{
		
		var found = false
		for (var j = 0; j<values.length; j++)
		{
			if (array[4][i]==values[j]) found = true;
		}
		if (found) array[1]=true;

	}
}
var makeGreen = function(array, values)
{
	if (array[1])
		return;
	array[2]=true;
	for (var i = 0; i<array[5].length; i++)
	{
		var found = false
		for (var j = 0; j<values.length; j++)
		{
			if (array[5][i]==values[j]) found = true;
		}
	if (!(found)) array[2]=false;

	}
}
var makeRed = function(array, values)
{
	array[3] = (!(array[1]||array[2]))
}






