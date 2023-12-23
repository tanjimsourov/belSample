document.body.style.backgroundImage = "url('assets/img/image2.jpg')";

// document.getElementById("boxt").innerHTML = "BOX-Title";


setTimeout(() => {
    document.querySelectorAll("#boxt").forEach(v => {
      v.innerText = "Box Title";
    })
  }, 1000);

setTimeout(() => {
    document.querySelectorAll("#boxst").forEach(v => {
      v.innerText = "Box Sub-Title";
    })
  }, 1000);


  setTimeout(() => {
    document.querySelectorAll("#boxImageID").forEach(image => {
        image.src = 'assets/img/oil-barrel-icon-vector-23190169.jpg';
    })
  }, 1000);

