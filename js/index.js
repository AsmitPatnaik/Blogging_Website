
//post filtering
function filterPosts() {
    const selectedYear = document.querySelector('input[name="year"]:checked')?.value;
    const posts = document.querySelectorAll('.home-article');
    
    posts.forEach(post => {
        const postYear = post.getAttribute('data-year');
        if (selectedYear && postYear !== selectedYear) {
            post.style.display = 'none';
        } else {
            post.style.display = 'block';
        }
    });
}



//dark mode
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Check local storage for user preference
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
}

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save user preference in local storage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});
