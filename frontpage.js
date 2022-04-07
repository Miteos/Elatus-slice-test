
document.addEventListener("DOMContentLoaded", function() {
    // check if DOM is ready
    let navbar = document.getElementById("nav");

    window.onscroll = ()=> {
        if (navbar !== null){
            window.scrollY > 100 ? navbar.classList.add("scroll") : navbar.classList.remove("scroll");
        }

    }
});




