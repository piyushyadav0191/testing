  var database = [
{
	username: "ayush",
	password: "sahu"
},
	  {
	username: "ark",
	password: "kaushik"
},
{
	username: "nikhil",
	password: "patel"
},
{
	username: "ashutosh",
	password: "giri"
},
{
	username: "ayush",
	password: "tiwari"
},
{
	username: "aman",
	password: "kohare"
},
{
	username: "raman",
	password: "saket"
},
{
	username: "mrityunjay",
	password: "singh"
},
{
	username: "saurabh",
	password: "chauhan"
},
{
	username: "nivedita",
	password: "sharma"
},
{
	username: "surbhi",
	password: "patel"
},
{
	username: "kulwant",
	password: "parte"
},
{
	username: "vishakha",
	password: "chourasiya"
},
	  {
	  username: "vishal",
	  password: "patidar"
	  }
];
function isUserValid(username, password){
	for (var i=0; i< database.length; i++){
		if(database[i].username === username &&
			database[i].password === password){
			return true;
		}
	}
	return false;
}

function signIn(username, password){
	if (isUserValid(username, password)) {
		 alert("Welcome, Buddy" );
	}else {
		 window.location="material/page.html";
	}
}

var userNamePrompt = prompt("what's your Firstname? (IN SMALL LETTERS)");
var passwordPrompt = prompt("what's your Secondname? (IN SMALL LETTERS)");



signIn(userNamePrompt, passwordPrompt);
