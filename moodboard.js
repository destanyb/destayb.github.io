$("#form_id").submit(function(e) {
    e.preventDefault();
    var input_value = document.getElementById("link_input").value;
    var image = document.createElement("IMG");
    image.src = input_value
    document.getElementById("container").appendChild(image);
  // Your Code Here!
});
