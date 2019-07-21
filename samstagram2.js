$("#NewProfile").submit(function(e) {
    e.preventDefault();
    var username = document.getElementById("cust.name").value;
	var userbio = document.getElementById("cust.info").value;
	var userimage = document.getElementById("image_link").value;
	var save = document.getElementById("roundButton").value;
    /*var image = document.createElement("IMG");
    image.src = input_value;

    var box = document.createElement("div")
    var Bio = document.createElement("p")*/
document.getElementById("userName").innerHTML = document.getElementById("cust.name").value;
	document.getElementById("userBio").innerHTML = document.getElementById("cust.info").value;
	document.getElementById("userImage").src = document.getElementById("image_link").value;
});

