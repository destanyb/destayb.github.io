$("#form_id").submit(function (e) {
    e.preventDefault();
    var input_value = document.getElementById("link_input").value;
    var image = document.createElement("IMG");
    image.src = input_value;
  
    var box = document.createElement("div")
    var caption = document.createElement("p")
    var caption_value = document.getElementById("caption").value
    caption.innerHTML = caption_value

    box.appendChild(image)
    box.appendChild(caption)
    document.getElementById("container").appendChild(box);

       box.style.height = 150 + "px";
       box.style.padding = 10 + "px"
       box.style.backgroundColor = "white"; 
       box.style.width = 150 + "px";
       box.style.overflowY = "auto";
       box.style.overflowX = "auto";
       box.style.wordWrap = "break-word";
       box.style.display = "inline-block";

       image.style.width = 149 + "px";


      box.addEventListener("click", function () { //event listener looks for a click of the post and then closes it
        var box_id = String(Math.random()); 
        box.id = box_id; 

        document.getElementById(box_id).remove(); 
    });   
	
	
	
	
});