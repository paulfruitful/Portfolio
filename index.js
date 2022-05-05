function myFunction() {
    var x = document.querySelector(".navbar-link");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function see(){
    let show=document.getElementById('show');
    let see=document.getElementById('see')
    let k=document.getElementById('knowledge')
    let i=document.getElementById('head')
    show.style.display="block";
    if(show.style.display=='block'){
      see.style.display="none";
      i.style.marginTop="150px"
    }
  }
