/* i want nav and footer be insertable in every page */
function load_nav_and_footer(){
    const nav_holder = document.querySelector("nav_holder");
    const footer_holder = document.querySelector("footer_holder");
    
    fetch("nav.html")
    .then ((response) => {
        if (!response.ok) throw new Error ("Nav not found");
        return response.text();
    })
    .then((data) => {
        nav_holder.innerHTML = data;
    })
    .catch((error) => {
        console.error("Error", error);
    })

    fetch("footer.html")
    .then ((response) => {
        if (!response.ok) throw new Error ("Footer not found");
        return response.text();
    })
    .then((data) => {
        footer_holder.innerHTML = data;
    })
    .catch((error) => {
        console.error("Error", error);
    })
}
load_nav_and_footer();