// Select 2 Plugin
$(document).ready(function() {
  $('.select2').select2();


});






// mobile toggle navbar


const navbarBox = document.querySelector(".ds-navbar-container ");
const toggleBar = document.querySelector(".mobile-toggle");

toggleBar.addEventListener("click", ()=> {
    navbarBox.classList.toggle('active');
    })
    document.onclick = function(e){
        if(!toggleBar.contains(e.target) &&!navbarBox.contains(e.target)){
            navbarBox.classList.remove('active'); 
        }
    }


// User dropdown menubar

      const userIcon = document.querySelector(".aw-user-icon");
      const dsDropdownMenu = document.querySelector(".ds-dropdown-menu");
      
      userIcon.addEventListener("click", ()=> {
        dsDropdownMenu.classList.toggle("active");
      })
      document.onclick = function(dsdropdownmenu){
        if(!userIcon.contains(dsdropdownmenu.target) && !dsDropdownMenu.contains(dsdropdownmenu.target)) {
          dsDropdownMenu.classList.remove("active");
        }
      }


    
// Slick Plugin
    $(document).ready(function(){
        $('.featured-biodata').slick({
            autoplay: true,
      autoplaySpeed: 5000,
            dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1199.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint:767.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
            breakpoint:575.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
        }
      ]
          
        });
      });     


// Hadith Card slider
$(document).ready(function(){
$(".hadith-item-container").cardslider({
        swipe: true,
        dots: true,
        nav: false,
              
        
      });
    }); 
    
    
    
// scroll to top
    
  const ScrollTopBtn = document.querySelector(".scroll-top-btn");

    window.addEventListener("scroll", checkheight)
    function checkheight(){
        if(window.scrollY > 600) {
            ScrollTopBtn.style.display = "flex"
        } 
        else {
            ScrollTopBtn.style.display = "none"
        }
    }
    ScrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
    