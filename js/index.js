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