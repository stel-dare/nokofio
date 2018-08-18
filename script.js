function showLinks(){
  var x = document.getElementsByClassName("nav-link");
  for(var i=0; i<x.length; i++){
    x[i].classList.toggle("show");
  }
}

function message(){
  document.getElementById("form").submit();
  document.getElementById("form").classList.toggle("displayMessage");
  document.getElementById("mes").classList.toggle("displayMessage");
}
