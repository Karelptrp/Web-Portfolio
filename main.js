document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.scroll-animate');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('in-view');
                // Uncomment next line if you want the animation only once
                // observer.unobserve(entry.target);
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
});