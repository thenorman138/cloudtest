document.addEventListener("DOMContentLoaded", function () {
    const cloudSect = document.querySelector(".cloud-sect");
    const cloudRevealText = document.querySelector(".mountain-reveal-text");
    const topCloud = document.querySelector(".top-cloud-reveal-img");
    const topCloud2 = document.querySelector(".top-cloud-reveal-img-2");

    let ticking = false; // Flag to prevent multiple executions

    function fadeInMountain() {
        if (!ticking) {
            // Ensure that the function is not already running
            requestAnimationFrame(function() {
                const scrollPosition = window.scrollY;
                const cloudSectHeight = cloudSect.offsetHeight;
                const opacity = 2.1 - (scrollPosition / cloudSectHeight);

                // Adjust opacity of topCloud based on scroll position
                topCloud.style.opacity = opacity.toFixed(2); // Limit opacity to two decimal places
                topCloud2.style.opacity = opacity.toFixed(2);

                ticking = false; // Reset the flag
            });

            ticking = true; // Set the flag to indicate that the function is running
        }
    }

    window.addEventListener("scroll", fadeInMountain);
    window.addEventListener("resize", fadeInMountain);

    fadeInMountain(); // Initial check on page load
});
