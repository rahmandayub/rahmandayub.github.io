// Function to activate the navbar link based on the section in view
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    // Function to remove "active" class from all links
    function removeActiveClasses() {
        navLinks.forEach((link) => {
            link.classList.remove('text-blue-300');
        });
    }

    // Function to add "active" class to the current section link
    function addActiveClass(sectionId) {
        const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('text-blue-300');
        }
    }

    // Use IntersectionObserver to detect which section is in view
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('id');
                    removeActiveClasses();
                    addActiveClass(sectionId);
                }
            });
        },
        {
            threshold: 0.6, // Adjust this value to fine-tune when the active state should change
        }
    );

    // Observe all sections
    sections.forEach((section) => {
        observer.observe(section);
    });
});
