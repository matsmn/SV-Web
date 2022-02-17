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
        /* Card 1 */
        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            document.getElementById("card_1").className = "card-1 animation-1";
          } else {
            document.getElementById("card_1").className = "card-1";
          }
        /* Card 2 */
        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            document.getElementById("card_2").className = "card-2 animation-2";
          } else {
            document.getElementById("card_2").className = "card-2";
          }
        /* Card 3 */
        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            document.getElementById("card_3").className = "card-3 animation-3";
          } else {
            document.getElementById("card_3").className = "card-3";
          }
        /* Inicio */  
        if (document.body.scrollTop > 950 || document.documentElement.scrollTop > 950) {
          document.getElementById("inicio").className = "nav-link";
        } else {
          document.getElementById("inicio").className = "nav-link active";
        }
        /* Examenes */
        if (document.body.scrollTop > 970 || document.documentElement.scrollTop > 970) {
          document.getElementById("examenes").className = "nav-link active";
        } else {
          document.getElementById("examenes").className = "nav-link";
        }
    }
}




