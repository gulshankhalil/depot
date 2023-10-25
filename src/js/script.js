

//    $(document).ready(function() {
//        var slides = $(".slideshow .slide");
//        var currentIndex = 0;

//        function animateSlides() {
//            slides.eq(currentIndex).animate({ top: 0 }, 1000); // Move slide to top position
//            currentIndex = (currentIndex + 1) % slides.length;
//            slides.eq(currentIndex).css({ top: '100%' }); // Move next slide below the viewport
//        }

//        setInterval(animateSlides, 3000); // Change slide every 3 seconds
//    });
//    const navItems = document.querySelectorAll('.nav-item');
//    const slides = document.querySelectorAll('.slide');
//    const lines = document.querySelectorAll('.nav-line');
   
//    navItems.forEach(item => {
//        item.addEventListener('click', function() {
//            const index = parseInt(this.getAttribute('data-index'));
   
//            // Hide all slides
//            slides.forEach(slide => slide.style.display = 'none');
           
//            // Reset lines
//            lines.forEach(line => line.style.width = '100px');
   
//            // Show the clicked slide
//            slides[index].style.display = 'block';
           
//            // Animate line
//            lines[index].style.width = '50%';  // or whatever value to match the design
//        });
//    });
   

   var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "flex";  
  setTimeout(carousel, 1000);    
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btns = document.querySelectorAll(".quick-look");

// Get the <span> element that closes the modal
var span = document.querySelector("#close");

// When the user clicks the button, open the modal 

btns.forEach(btn => {
  btn.addEventListener("click", function(e){
    e.preventDefault();
    modal.classList.add("active")
  })
});

span.addEventListener("click", function(e){
  e.preventDefault()
  modal.classList.remove("active")
})



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove("active")
  }
}

