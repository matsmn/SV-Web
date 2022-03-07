window.onload = function () {
    const menu_btn = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sideMenu');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        sidebar.classList.toggle('is-active');
    });

    // Get the container element
    var navbar = document.getElementById("nav_links");

    // Get all links with class="nav-link" inside the ul
    var links = navbar.getElementsByClassName("nav-link");

    // Loop through the links and add the active class to the current/clicked link
    for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
    }
    
    // Add/Delete a class on scroll
    window.onscroll = function() {myFunction()};
    function myFunction() {
        /* Inicio Link */  
        if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
          document.getElementById("inicio").className = "nav-link";
        } else {
          document.getElementById("inicio").className = "nav-link active";
        }
        /* Examenes Link */
        if (document.body.scrollTop > 751 || document.documentElement.scrollTop > 751) {
          document.getElementById("examenes").className = "nav-link active";
        } 
          else {
            document.getElementById("examenes").className = "nav-link";
        }
        if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {
          document.getElementById("examenes").className = "nav-link";
        } 
        /* Cursos Link */
        if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {
          document.getElementById("cursos").className = "nav-link active";
        } else {
          document.getElementById("cursos").className = "nav-link";
        }
        if (document.body.scrollTop > 3800 || document.documentElement.scrollTop > 3800) {
          document.getElementById("cursos").className = "nav-link";
        }
        /* Anotate Link */
        if (document.body.scrollTop > 3800 || document.documentElement.scrollTop > 3800) {
          document.getElementById("anotate").className = "nav-link active";
        } else {
          document.getElementById("anotate").className = "nav-link";
          }  
    }
}




/* OnScroll Animations */
      
/* Card 1 */
/* if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("card_1").className = "card-1 animation-1";
} else {
    document.getElementById("card_1").className = "card-1";
  } */
/* Card 2 */
/* if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("card_2").className = "card-2 animation-2";
} else {
    document.getElementById("card_2").className = "card-2";
  } */
/* Card 3 */
/* if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("card_3").className = "card-3 animation-3";
} else {
    document.getElementById("card_3").className = "card-3";
  } */
/* Examenes Title */
/* if (document.body.scrollTop > 775 || document.documentElement.scrollTop > 775) {
    document.getElementById("examenes_2").className = "title-EX animation-4";
} else {
    document.getElementById("examenes_2").className = "title-EX";
  } */
/* Examenes Paragraph */
/* if (document.body.scrollTop > 775 || document.documentElement.scrollTop > 775) {
    document.getElementById("paragraph_ex").className = "paragraph-EX animation-5";
} else {
    document.getElementById("paragraph_ex").className = "paragraph-EX";
  } */
/* Examenes Image */
/* if (document.body.scrollTop > 775 || document.documentElement.scrollTop > 775) {
    document.getElementById("image_ex").className = "img-EX animation-6";
} else {
  document.getElementById("image_ex").className = "img-EX";
  }  */

