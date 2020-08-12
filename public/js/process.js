function process(){
  var a = document.getElementById('textArea').value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
  }
};
xhttp.open("GET", "http://localhost/"+a, true);
xhttp.send();
alert("Message is sent, thank you!");
}
