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
        threshold: 0.9, // Trigger when 50% of the target is visible
    };

    // Create a new Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, options);

    // Target elements
    const svgContainers = [
        document.getElementById("counter-img-1"),
        document.getElementById("counter-img-2"),
        document.getElementById("counter-img-3"),
        document.getElementById("counter-img-4"),
        document.getElementById("counter-img-5"),
    ];

    console.log(svgContainers);
    // Load animations for each target element
    const animations = svgContainers.map((svgContainer, index) => {
        if (svgContainer) { // Add this check
            const animItem = bodymovin.loadAnimation({
                wrapper: svgContainer,
                animType: "svg",
                loop: false,
                autoplay: false,
                path: `https://lottie.host/45a33ab5-2a21-4ad4-89f7-3d7f10157461/w0mxsxxNj3.json`, // Adjust path accordingly
            });
            // Start observing each target element
            observer.observe(svgContainer);
            return animItem;
        } else {
            return null; // Return null if element is null
        }
    });

    // Function to play the animation for the given index
    function playAnimation(index) {
        svgContainers[index].classList.remove("counter-hide");
        animations[index].goToAndPlay(0, true);
        // Event listener for animation completion
        animations[index].addEventListener("complete", () => {
            svgContainers[index].classList.add("counter-hide");
        });
    }
});
