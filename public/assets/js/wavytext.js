document.addEventListener("DOMContentLoaded", function() {
    // Function to handle intersection
    function handleIntersection(entries, observer) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Play the animation for the current target
                playAnimation(index);
                // Unobserve the target to prevent unnecessary triggers
                observer.unobserve(entry.target);
            }
        });
    }

    // Options for the Intersection Observer
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Trigger when 50% of the target is visible
    };

    // Create a new Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, options);

    // Target elements
    const svgContainers = [document.getElementById("mountain-wave-text-2")];

    // Load animations for each target element
    const animations = svgContainers.map((svgContainer, index) => {
        if (svgContainer) { // Check if svgContainer is not null
            const animItem = bodymovin.loadAnimation({
                wrapper: svgContainer,
                animType: "svg",
                loop: true,
                autoplay: false,
                path: `https://lottie.host/52b1ec94-051e-4211-aa91-4eb47573becf/Berq6IyIPs.json`, // Adjust path accordingly
            });
            // Start observing each target element
            observer.observe(svgContainer);
            return animItem;
        } else {
            return null;
        }
    });

    // Function to play the animation for the given index
    function playAnimation(index) {
        if (animations[index]) { // Check if animations[index] is not null
            svgContainers[index].classList.remove("counter-hide");
            animations[index].goToAndPlay(0, true);
            // Event listener for animation completion
            animations[index].addEventListener("complete", () => {
                svgContainers[index].classList.add("counter-hide");
            });
        }
    }
});
