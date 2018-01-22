var headline = document.getElementById("heading");
var heading = document.getElementById("head");

headline.onclick = function(){
	headline.innerHTML = "You have clicked the heading";
};

heading.onmouseover = function(){
	heading.innerHTML = "This is new paragraph";
};
