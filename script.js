document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".progress div");

    // Helper function to check if an element is in the viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Function to trigger animations
    const triggerAnimations = () => {
        animatedElements.forEach((element) => {
            if (isInViewport(element)) {
                element.style.animation = "none"; // Reset the animation
                void element.offsetWidth; // Trigger reflow
                element.style.animation = ""; // Apply original animation
            }
        });
    };

    // Add scroll event listener
    window.addEventListener("scroll", triggerAnimations);

    // Initial check
    triggerAnimations();
});


// const form = document.querySelector('form');




